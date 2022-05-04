const projectArea = $('#projectArea')
const modalBtn = $('#modalBtn')
const githubBtn = $('#githubLink')
const deployedBtn = $('#deployedLink')
const projectLink = [
	{
		name: 'MoviDex',
		github: 'https://github.com/Gkal14/MoviDex',
		deployed: 'https://gkal14.github.io/MoviDex/'
	},
	{
		name: 'Password Generator',
		github: 'https://github.com/void2412/passwordGenerator',
		deployed: 'https://void2412.github.io/passwordGenerator/'
	},
	{
		name: 'Weather Forecast',
		github: 'https://github.com/void2412/weatherForecast',
		deployed: 'https://void2412.github.io/weatherForecast/'
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