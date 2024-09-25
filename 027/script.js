const taskDiv = document.querySelectorAll('.task')

const logicalConversor = (str) => {
  if (str === 'false') {
      return false
  }
  if (str === 'true') {
      return true
  }
  return
}


taskDiv.forEach(task => {
    task.setAttribute('done', false)
    task.addEventListener('click', () => {
        task.setAttribute('done', !logicalConversor(task.getAttribute('done')))

        if (task.getAttribute('done') == 'true') {
            task.children[0].style.color = '#5e7c8bbc'            

            task.children[1].style.opacity = '0'
            task.children[1].style.scale = '1.2'

            task.children[2].style.strokeDashoffset =  '0'
        } else if (task.getAttribute('done') == 'false') {
            task.children[0].style.color = '#5e7c8b'

            
            task.children[2].style.transitionDelay = '0s'
            task.children[1].style.transitionDelay = '.8s'
            setTimeout(() => {
                task.children[1].style.transitionDelay = '0s'
            },800)
            task.children[1].style.opacity = '1'
            task.children[1].style.scale = '1'

            task.children[2].style.strokeDashoffset =  '30'
            task.children[2].style.transitionDelay = '.4s'
        }
    })
})