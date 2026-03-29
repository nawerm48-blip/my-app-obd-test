/**
 * File Upload Feature - API Layer
 */

/**
 * Upload single file
 */
export async function uploadFile(file, options = {}) {
  const formData = new FormData()
  formData.append('file', file)
  
  if (options.folder) {
    formData.append('folder', options.folder)
  }
  
  return $fetch('/api/upload/', {
    method: 'POST',
    body: formData,
  })
}

/**
 * Upload multiple files
 */
export async function uploadMultipleFiles(files, options = {}) {
  const formData = new FormData()
  
  files.forEach((file, index) => {
    formData.append(`file${index}`, file)
  })
  
  if (options.folder) {
    formData.append('folder', options.folder)
  }
  
  return $fetch('/api/multiupload/', {
    method: 'POST',
    body: formData,
  })
}

/**
 * Delete file
 */
export async function deleteFile(fileId) {
  return $fetch('/api/deletefiles/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: { fileId },
  })
}

/**
 * Use file upload composable
 */
export function useFileUpload() {
  const files = ref([])
  const isUploading = ref(false)
  const uploadProgress = ref(0)
  const error = ref(null)
  
  const upload = async (fileList, options = {}) => {
    isUploading.value = true
    error.value = null
    uploadProgress.value = 0
    
    try {
      const result = await uploadMultipleFiles(fileList, options)
      files.value = result
      uploadProgress.value = 100
      return result
    } catch (e) {
      error.value = e.message || 'Ошибка загрузки файлов'
      throw e
    } finally {
      isUploading.value = false
    }
  }
  
  const clearFiles = () => {
    files.value = []
    error.value = null
    uploadProgress.value = 0
  }
  
  return {
    files,
    isUploading,
    uploadProgress,
    error,
    upload,
    clearFiles,
  }
}
