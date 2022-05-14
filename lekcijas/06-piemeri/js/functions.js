let emailList = [null, "  Egija.Mellene@Gmail.com ", undefined,"     Dita.Zemene@gmail.COM", "Laura.Upene@Inbox.LV"];

let formatList = (emailList) => {
    let formattedEmailList = [];

    emailList.forEach((email) => {
        try {
            let formattedItem = email.trim().toLowerCase();
            formattedEmailList.push(formattedItem);
        } catch(error) {
            console.log(`Not able to format array item - ${email}:`, error);
        }
    });

    return formattedEmailList
};

let endResult = formatList(emailList);

console.log(endResult);