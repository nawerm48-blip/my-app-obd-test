/**
 * Contact Form Feature - API Layer
 */

/**
 * Submit contact form
 */
export async function submitContactForm(formData) {
  return $fetch('/api/contact/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: formData,
  })
}

/**
 * Use contact form composable
 */
export function useContactForm() {
  const form = ref({
    email: '',
    name: '',
    phone: '',
    info: '',
    description: '',
  })
  
  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const error = ref(null)
  
  const resetForm = () => {
    form.value = {
      email: '',
      name: '',
      phone: '',
      info: '',
      description: '',
    }
    error.value = null
  }
  
  const submit = async () => {
    isSubmitting.value = true
    error.value = null
    
    try {
      await submitContactForm(form.value)
      isSuccess.value = true
      resetForm()
    } catch (e) {
      error.value = e.message || 'Ошибка отправки формы'
    } finally {
      isSubmitting.value = false
    }
  }
  
  return {
    form,
    isSubmitting,
    isSuccess,
    error,
    submit,
    resetForm,
  }
}
