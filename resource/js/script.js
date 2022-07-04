const projectArea = $('#projectArea')
const modalBtn = $('#modalBtn')
const githubBtn = $('#githubLink')
const deployedBtn = $('#deployedLink')
const projectLink = [
	{
		name: 'My Butcher website',
		github: 'https://github.com/void2412/MyButcher',
		deployed: 'https://ordering-system-team4.herokuapp.com/'
	},
	{
		name: 'Tech Blog',
		github: 'https://github.com/void2412/techBlog',
		deployed: 'https://tech-blog-2412.herokuapp.com/'
	},
	{
		name: 'MoviDex',
		github: 'https://github.com/Gkal14/MoviDex',
		deployed: 'https://gkal14.github.io/MoviDex/'
	}
]


// add event listener
projectArea.on('click','.projectCard', handleProjectAreaClick)

// handle event listener

function handleProjectAreaClick(event){
	var target= $(event.currentTarget)
	var id = parseInt(target.attr('data-id'))
	githubBtn.attr('href', projectLink[id].github)
	deployedBtn.attr('href',projectLink[id].deployed)
	modalBtn.click()
}