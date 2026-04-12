const patients = [
    {name: "Ashley", age: 19, diagnosis: "varicella-zoster virus", medications: "acyclovir"},
    {name: "Frieren", age: 1500, diagnosis: "narcolepsy", medications: "modafinil"},
    {name: "Himmel", age: 76, diagnosis: "old-age", medications: "none"},
    {name: "Heiter", age: 100, diagnosis: "old-age", medications: "none"},
    {name: "Zephaniah", age: 25, diagnosis: "gravid", medications: "prenatal vitamis"}
];

function matchDiagnosis(diagnosis){
    const matchedDiagnosis = patients.filter(patient => patient.diagnosis.includes(diagnosis));
    if(matchedDiagnosis.length === 0){
        console.log(`No matched person with diagnosis: ${diagnosis}`);
    }else{
        console.log("Matched results: ");
        matchedDiagnosis.forEach(patient => {
            console.log(`Name: ${patient.name}, age: ${patient.age}`);
        });
    }
}
//matchDiagnosis("old-age");

function matchMedications(medications){
    const matchedMedications = patients.filter(patient => patient.medications.includes(medications));
    if(matchedMedications.length === 0){
        console.log(`No matched patients taking the medication ${medications}.`);
    }else{
        console.log("Matched results: ");
        matchedMedications.forEach(patient =>{
            console.log(`Diagnosis: ${patient.diagnosis}, medication/s: ${patient.medications}.`);
        });
    }

}

//matchMedications("none");

function matchAgeRange(age1, age2){
    const matchedAgeRange = patients.filter(patient => patient.age >= age1 && patient.age <= age2);
    if(matchedAgeRange.length === 0){
        console.log("No matched patients within the age range.");
    }else{
        console.log(`Matched results: ages ${age1} to ${age2}`);
        matchedAgeRange.forEach(patient => {
            console.log(`Patient name: ${patient.name}, age: ${patient.age}, diagnosis: ${patient.diagnosis}, medication/s: ${patient.medications}`);
        });
    }
}

matchAgeRange(1000, 2000);
matchAgeRange(0, 100);

const title = document.getElementById('title');
title.textContent = "Healthcare - Patient Records Management";

const patient_list = document.getElementById('patient-list');

patients.forEach(patient => {
    const li  = document.createElement('li');
    li.textContent = `name: ${patient.name}, age: ${patient.age}, diagnosis: ${patient.diagnosis}, medication/s: ${patient.medications}`;
    patient_list.appendChild(li);
});