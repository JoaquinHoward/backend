const patient_list = [
    // --- Underweight (BMI < 18.5) ---
    {name: "Ezra", weight: 45, height: 1.70},
    {name: "Fern", weight: 40, height: 1.60},
    {name: "Schierke", weight: 30, height: 1.40},
    {name: "Linie", weight: 35, height: 1.50},
    {name: "Puck", weight: 0.5, height: 0.1}, 
    {name: "Laufen", weight: 42, height: 1.65},
    {name: "Kanne", weight: 44, height: 1.68},
    {name: "Lawine", weight: 43, height: 1.67},
    {name: "Ehre", weight: 46, height: 1.72},
    {name: "Serie", weight: 38, height: 1.55},
    {name: "Sera", weight: 41, height: 1.62},
    {name: "Mina", weight: 43, height: 1.70},
    {name: "Tobi", weight: 47, height: 1.75},
    {name: "Yuri", weight: 39, height: 1.60},
    {name: "Kira", weight: 44, height: 1.69},
    {name: "Nico", weight: 48, height: 1.80},
    {name: "Rini", weight: 37, height: 1.58},
    {name: "Sora", weight: 42, height: 1.71},
    {name: "Aki", weight: 45, height: 1.76},
    {name: "Hina", weight: 40, height: 1.64},
    {name: "Yuki", weight: 46, height: 1.74},
    {name: "Maki", weight: 44, height: 1.70},
    {name: "Suzi", weight: 41, height: 1.63},
    {name: "Lulu", weight: 38, height: 1.59},
    {name: "Pippin_Small", weight: 40, height: 1.60},

    // --- Normal (BMI 18.5 - 24.9) ---
    {name: "Joaquin", weight: 65, height: 1.70},
    {name: "Frieren", weight: 50, height: 1.55},
    {name: "Himmel", weight: 70, height: 1.80},
    {name: "Stark", weight: 72, height: 1.75},
    {name: "Casca", weight: 60, height: 1.65},
    {name: "Judeau", weight: 64, height: 1.70},
    {name: "Serpico", weight: 67, height: 1.77},
    {name: "Farnese", weight: 55, height: 1.62},
    {name: "Rickert", weight: 58, height: 1.68},
    {name: "Isidro", weight: 48, height: 1.50},
    {name: "Guts_Young", weight: 80, height: 1.90},
    {name: "Griffith", weight: 73, height: 1.78},
    {name: "John", weight: 75, height: 1.80},
    {name: "Mary", weight: 60, height: 1.65},
    {name: "James", weight: 78, height: 1.85},
    {name: "Patricia", weight: 62, height: 1.70},
    {name: "Robert", weight: 70, height: 1.75},
    {name: "Jennifer", weight: 55, height: 1.60},
    {name: "Linda", weight: 64, height: 1.68},
    {name: "William", weight: 76, height: 1.82},
    {name: "Elizabeth", weight: 58, height: 1.63},
    {name: "David", weight: 74, height: 1.78},
    {name: "Barbara", weight: 60, height: 1.67},
    {name: "Richard", weight: 76, height: 1.80},
    {name: "Susan", weight: 59, height: 1.65},

    // --- Overweight (BMI 25 - 29.9) ---
    {name: "Heiter", weight: 88, height: 1.82},
    {name: "Denken", weight: 80, height: 1.70},
    {name: "Richter", weight: 85, height: 1.78},
    {name: "Wirbel", weight: 85, height: 1.79},
    {name: "Scharf", weight: 82, height: 1.76},
    {name: "Kraft", weight: 95, height: 1.85},
    {name: "Lugner", weight: 86, height: 1.80},
    {name: "Azan", weight: 92, height: 1.85},
    {name: "Silat", weight: 95, height: 1.88},
    {name: "Locus", weight: 98, height: 1.90},
    {name: "Irvine", weight: 100, height: 1.95},
    {name: "Adon", weight: 90, height: 1.83},
    {name: "Boscogn", weight: 108, height: 1.98},
    {name: "Gambino", weight: 90, height: 1.80},
    {name: "Donovan", weight: 105, height: 1.88},
    {name: "Sarah_V", weight: 80, height: 1.64},
    {name: "Charles_V", weight: 95, height: 1.83},
    {name: "Christopher_V", weight: 100, height: 1.86},
    {name: "Daniel_V", weight: 92, height: 1.79},
    {name: "Matthew_V", weight: 98, height: 1.84},
    {name: "Anthony_V", weight: 105, height: 1.89},
    {name: "Mark_V", weight: 88, height: 1.77},
    {name: "Donald_V", weight: 108, height: 1.91},
    {name: "Steven_V", weight: 102, height: 1.85},
    {name: "Paul_V", weight: 93, height: 1.80},

    // --- Obese (BMI >= 30) ---
    {name: "Eisen", weight: 90, height: 1.40},
    {name: "Guts", weight: 125, height: 1.95},
    {name: "Pippin", weight: 150, height: 2.10},
    {name: "Grunbeld", weight: 300, height: 2.50},
    {name: "Zodd", weight: 220, height: 2.20},
    {name: "Wyald", weight: 200, height: 2.00},
    {name: "Bazuso", weight: 160, height: 2.00},
    {name: "Large_Tom", weight: 110, height: 1.70},
    {name: "Big_Mary", weight: 95, height: 1.60},
    {name: "Heavy_James", weight: 120, height: 1.85},
    {name: "Patricia_H", weight: 100, height: 1.70},
    {name: "Robert_H", weight: 115, height: 1.75},
    {name: "Michael_H", weight: 130, height: 1.90},
    {name: "Linda_H", weight: 105, height: 1.68},
    {name: "William_H", weight: 125, height: 1.82},
    {name: "Elizabeth_H", weight: 95, height: 1.63},
    {name: "David_H", weight: 118, height: 1.78},
    {name: "Barbara_H", weight: 98, height: 1.67},
    {name: "Richard_H", weight: 116, height: 1.80},
    {name: "Susan_H", weight: 96, height: 1.65},
    {name: "Joseph_H", weight: 128, height: 1.88},
    {name: "Jessica_H", weight: 102, height: 1.72},
    {name: "Thomas_H", weight: 124, height: 1.81},
    {name: "George_H", weight: 135, height: 1.86},
    {name: "Ultimate_Unit", weight: 200, height: 1.80}
];

const patient_table = document.getElementById('patient-table');
const underweight_table = document.getElementById('underweight-table');
const overweight_table = document.getElementById('overweight-table');
const normal_table = document.getElementById('normal-table');
const obese_table = document.getElementById('obese-table');
const extremely_obese_table = document.getElementById('extremely-obese-table');

let underweight = [];
let normal = [];
let overweight = [];
let obese = [];
let extremely_obese = [];

function CompBMI(patient_list){
    for(let i in patient_list){
        let bmi = patient_list[i].weight / (patient_list[i].height*patient_list[i].height)
        if(bmi < 18.5){
            underweight.push(patient_list[i]);
        }else if(bmi >= 18.5 && bmi <= 24.9){
            normal.push(patient_list[i]);
        }else if(bmi >= 25 && bmi <= 29.9){
            overweight.push(patient_list[i]);
        }else if(bmi >= 30 && bmi <= 39.9){
            obese.push(patient_list[i]);
        }else if(bmi >= 40){
            extremely_obese.push(patient_list[i]);
        }
        let tr = document.createElement('tr');
        let td_name = document.createElement('td');
        let td_weight = document.createElement('td');
        let td_height = document.createElement('td');

        td_name.textContent = `${patient_list[i].name}`;
        td_weight.textContent = `${patient_list[i].weight}`;       
        td_height.textContent = `${patient_list[i].height}`;

        tr.appendChild(td_name);
        tr.appendChild(td_weight);
        tr.appendChild(td_height);

        patient_table.appendChild(tr);
    }
}

CompBMI(patient_list);

function showWeight(weight, category){

    for(let i in weight){
        let tr = document.createElement('tr');
        let td_name = document.createElement('td');
        let td_weight = document.createElement('td');
        let td_height = document.createElement('td');
        td_name.textContent = `${weight[i].name}`;
        td_weight.textContent = `${weight[i].weight}`;
        td_height.textContent = `${weight[i].height}`;
        tr.appendChild(td_name);
        tr.appendChild(td_weight);
        tr.appendChild(td_height);
        if(category == "underweight"){
            underweight_table.appendChild(tr);
        }else if(category == "normal"){
            normal_table.appendChild(tr);
        }else if(category == "overweight"){
            overweight_table.appendChild(tr);
        }else if(category == "obese"){
            obese_table.appendChild(tr);
        }else if(category == "extremely obese"){
            extremely_obese_table.appendChild(tr);
        }
    }
}

showWeight(underweight, "underweight");
showWeight(normal, "normal");
showWeight(overweight, "overweight");
showWeight(obese, "obese");
showWeight(extremely_obese, "extremely obese");






/*


Patient BMI Calculator: Create a function CompBMI() that takes an array of 100 patients' height and weight, computes the BMI using the BMI computation formula:
BMI = weight (kg) ÷ height2 (meters)

after computing the BMI the function then stores their classified BMI depending on the category their BMI belongs to:

Underweight	
< 18.5
Normal	
18.5–24.9
Overweight	
25.0–29.9
Obesity	
30.0–39.9
Extreme Obesity	
40.0 +


*/