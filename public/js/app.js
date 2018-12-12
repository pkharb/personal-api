console.log("js loaded!!");
// console.log(axios);
// var outputBox = document.getElementsByClassName('output-box');

// var $myProjects = $('#myProjects')

// console.log(outputBox[0].innerHTML)

// $("#but-1").click(function() {
//     console.log(outputBox)
//     outputBox[0].append(
//         '<p>heeyyy</p>'
//     );
// })

$("#but-2").click(function() {
    axios.get('/api/projects')
    .then(res => {
        // console.log(res)
        let outputBox = $('#output-list');
        outputBox.html('');
        // let xx = $('#output-list').hasChildNodes()
        // console.log(xx)
        // ALL PROJECTS
        let projects = res.data.projects;
        console.log(outputBox);
        //if(outputBox.innerText)
        projects.forEach(function(p){
            console.log(p);
            outputBox.append(
                `<li>Name : ${p.name} </li>
                <li>Languages : ${p.languages} </li>
                <li>Created On : ${p.dateCreated} </li>
                <li>Status : ${p.status} </li>
                `)
        })
    })
})

  // PROFILE
$("#but-3").click(function() {
    axios.get('api/profile')
    .then(res => {
        console.log(res);
        let profile = res.data.Profile;
        var outputBox = $('#output-list');
        outputBox.html('');
        console.log(profile);
        outputBox.append(
            `<li>Name : ${profile.name} </li>
             <li>Age in days : ${profile.daysOld} </li>
             <li>Github UserName : ${profile.githubUsername} </li>
             <li>GitHub Link : ${profile.githubLink} </li>
             <li>GitHub  Profile Image : ${profile.githubProfileImage} </li>
            `)
      

    })
})

$("#form-1").submit(function(evt){
    evt.preventDefault();
    
    let project = {
        name: $("#name").val(),
        languages: $("#lang").val(),
        dateCreated: $("#date").val(),
        status: $("#status").val()
    }
    axios.post('/api/projects', project)
    .then(apiResponse => {
        console.log(apiResponse);
        let outputBox = $('#output-list');
        outputBox.html('');
    
            //console.log(p);
            outputBox.append(
                `<li>Name : ${apiResponse.data.newProject.name} </li>
                <li>Languages : ${apiResponse.data.newProject.languages} </li>
                <li>Created On : ${apiResponse.data.newProject.dateCreated} </li>
                <li>Status : ${apiResponse.data.newProject.status} </li>
                `)
            
    })
})