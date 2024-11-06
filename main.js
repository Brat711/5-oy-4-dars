const surName = prompt ("Ismingizni kriting")
const userAame = prompt ("Biror bir harif kriting")
if(surName.includes(userAame)){
    alert(`${surName} ismida ${userAame} harifi bor`)

}
else{
    alert(`${surName} ismida ${userAame} harifi uoq`)
}