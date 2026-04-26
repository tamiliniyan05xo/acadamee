const completeCourse = (index) => {
  const updatedCourses = [...courses]

  updatedCourses[index].progress = 100

  setCourses(updatedCourses)

  localStorage.setItem(
    'courses',
    JSON.stringify(updatedCourses)
  )

  localStorage.setItem(
    'certificateCourse',
    updatedCourses[index].title
  )

  window.location.href = '/certificate'
}