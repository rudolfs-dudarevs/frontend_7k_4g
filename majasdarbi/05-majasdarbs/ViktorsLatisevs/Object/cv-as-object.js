const ViktorsLatisevs = {
    profession: "Export manager",
    fullName: "Viktors Latisevs",
    profileImg: "./profilepic.png",
    contactInfo: {
        tel: "29824900",
        email: "vlatisevs@gmail.com",
        linkedIn: "https://shorturl.ae/h3DrB",
    },
    workExperience: [
        {
            companyName: "RSJ GLOBAL MARKETING(UK)",
            positionHeld: "Field representative, Sales team builder,Customer service",
            employementPeriod: "May 8/2013/ - Novemer 14/2018/",
        },
        {
            companyName: "Pack Expert OU",
            positionHeld: "Export Manager",
            employementPeriod: "July 7/2020/-Present",
        },
        {
            companyName: "Bunker Esports powered by Republic of Gamers (BKROG)",
            positionHeld: "Support lane player/Team Captain",
            employementPeriod: "February 25/2020/-Present",
        }

    ],
    education: [
        {
            educationPlace: "Latvian Maritime Academy",
            educationPeriod: "2012-2016",
        },
        {
            educationPlace: "riga secondary school n96",
            educationPeriod: "2000-2010",

        },
    ],
    skills: [
    {    
        workSkill: "Customer service",
    },
    {
        workSkill: "Marketing",
    },
    {
        workskill: "Digital marketing",
    },
    {
        workSkill: "Designing",
    },
    {
        workSkill: "Cyberathlete",
    },

    ],
    faq: [
    {    
        hobbies: "Traveling/Backpacking",
    },
    {
        hobbies: "Gaming",
    },
    {
        hobbies: "Streaming",
    },
    {
        hobbies: "Photoshop design",
    },
    {
        myFavPlaylist: "https://open.spotify.com/embed/playlist/15beV27OZkisXOzyGw5a9N"
    },

    ],
    languages: [
    {
        lang: "Russian",
    },
    {
        lang: "Latvian",
    },
    {
        lang: "English",
    },
    {
        lang: "French",
    },
    {
        lang: "German",
    },
    ]
    

};

console.log("Name:", ViktorsLatisevs.fullName)
console.log("Currently working as:", ViktorsLatisevs.profession)
console.log(`Contact info: cell number ${ViktorsLatisevs.contactInfo.tel}, email: ${ViktorsLatisevs.contactInfo.email}, linkedIn: ${ViktorsLatisevs.contactInfo.linkedIn}.`)
console.log(`Companies worked in: ${ViktorsLatisevs.workExperience[0].employementPeriod} ${ViktorsLatisevs.workExperience[0].companyName}, ${ViktorsLatisevs.workExperience[1].employementPeriod} ${ViktorsLatisevs.workExperience[1].companyName}, ${ViktorsLatisevs.workExperience[2].employementPeriod} ${ViktorsLatisevs.workExperience[2].companyName}`)
console.log(`Areas worked in: ${ViktorsLatisevs.workExperience[0].positionHeld}, ${ViktorsLatisevs.workExperience[1].positionHeld}, ${ViktorsLatisevs.workExperience[2].positionHeld}`)
console.log(`Education: ${ViktorsLatisevs.education[0].educationPeriod} ${ViktorsLatisevs.education[0].educationPlace} , ${ViktorsLatisevs.education[1].educationPeriod} ${ViktorsLatisevs.education[1].educationPlace}`)
console.log(`Skills: ${ViktorsLatisevs.skills[0].workSkill}, ${ViktorsLatisevs.skills[1].workSkill}, ${ViktorsLatisevs.skills[2].workSkill}, ${ViktorsLatisevs.skills[3].workSkill}, ${ViktorsLatisevs.skills[4].workSkill}`)
console.log(`Hobbies: ${ViktorsLatisevs.faq[0].hobbies}, ${ViktorsLatisevs.faq[1].hobbies}, ${ViktorsLatisevs.faq[2].hobbies}, ${ViktorsLatisevs.faq[3].hobbies}`)
console.log(`Favourite playlist: ${ViktorsLatisevs.faq[4].myFavPlaylist}`)
console.log(`Languages: ${ViktorsLatisevs.languages[0].lang}, ${ViktorsLatisevs.languages[1].lang},${ViktorsLatisevs.languages[2].lang},${ViktorsLatisevs.languages[3].lang},${ViktorsLatisevs.languages[4].lang}.    `)
