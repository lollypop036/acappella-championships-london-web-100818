

// td>${group.college.name}</td>
//      <td>${group.name}</td> 
//     <td>${group.membership}</td> 
//     <td>${group.college.division}</td> 



const getGroups = () => fetch('http://localhost:3000/a_cappella_groups').then(res => res.json())



   
const renderGroup = (group) => {
    console.log('render?')
   const tableBody = document.querySelector('#table-body')
    const table = document.createElement('tr')
    table.innerHTML = `
    <td>${group.college.name}</td>
     <td>${group.name}</td> 
    <td>${group.membership}</td> 
    <td>${group.college.division}</td> 
    <td><img src='./assets/trophy.png' id='group-${group.id}'/></td>
    <td><button id="delete-${group.id}">Delete</button</td>
    `
   
    tableBody.appendChild(table)
    const deleteButton = document.querySelector(`#delete-${group.id}`)
    const winnerButton = document.querySelector(`#group-${group.id}`)
    const winner = document.querySelector('#winner')  

    winnerButton.addEventListener("click", () => {
        console.log('winner?')
        tableBody.innerHTML = ''
        getGroups().then(
            groups => groups.filter(item => item.id != group.id)).then(renderGroups)
        winner.innerText = `Winner: ${group.name}`
        })

        deleteButton.addEventListener("click", () => {
            console.log('delete?')
            table.innerHTML = ''
            })

        

}

const renderGroups = (groups) => groups.forEach(renderGroup)







document.addEventListener("DOMContentLoaded", () => {
    console.log('load?')
getGroups()
.then(renderGroups)



const collegeTab = document.querySelector('#college-tab')
const groupNameTab = document.querySelector('#group-name-tab')
const membershipTab = document.querySelector('#membership-tab')
const divisionTab = document.querySelector('#division-tab')


collegeTab.addEventListener("click", () => {
    const tableBody = document.querySelector('#table-body')
        tableBody.innerHTML = ''
        getGroups().then(groups => {
           return groups.sort(function (a,b) {
              if (a.college.name< b.college.name) {return -1}
              if (a.college.name > b.college.name) {return 1}
              return 0

            })
        })
           .then(groups => renderGroups(groups))
        
        
    
})
groupNameTab.addEventListener("click",  () => {
    const tableBody = document.querySelector('#table-body')
        tableBody.innerHTML = ''
        getGroups().then(groups => {
           return groups.sort(function (a,b) {
              if (a.name < b.name) {return -1}
              if (a.name > b.name) {return 1}
              return 0

            })
        })
           .then(groups => renderGroups(groups))
        
        
    
    })
membershipTab.addEventListener("click",  () => {
    const tableBody = document.querySelector('#table-body')
        tableBody.innerHTML = ''
        getGroups().then(groups => {
           return groups.sort(function (a,b) {
              if (a.membership < b.membership) {return -1}
              if (a.membership > b.membership) {return 1}
              return 0

            })
        })
           .then(groups => renderGroups(groups))
        
        

  })
    
    

divisionTab.addEventListener("click",  () => {

const tableBody = document.querySelector('#table-body')
        tableBody.innerHTML = ''
        getGroups().then(groups => {
           return groups.sort(function (a,b) {
              if (a.college.division < b.college.division) {return -1}
              if (a.college.division > b.college.division) {return 1}
              return 0

            })
        })
           .then(groups => renderGroups(groups))
        
        

  })
})

// const pageSort = (tab) => {
//     
//     getGroups()
// .then(groups => groups.sort(function (a,b) {a.tab - b.tab}))
// .then(renderGroups) }
// 