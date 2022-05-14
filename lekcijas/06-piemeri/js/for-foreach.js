let frontendTools = ["CSS", "HTML", "JS", "React", undefined, "Angular", "Vue"];

frontendTools.forEach((item) => {
    console.log("frontendTools array item:", item);

    for(let i = 0; i < 10; i++) {
        console.log(`Nedted loop iteration ${i} - `, item);
    };
});
