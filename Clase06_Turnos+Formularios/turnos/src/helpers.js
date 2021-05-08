export function crearCondiciones(diabetes, obesidad, hipertension)
{

    let rta = "";

    rta += diabetes ? " Diabetes " : "";
    rta += obesidad ? " Obesidad " : "";
    rta += hipertension ? " Hipertension " : "";

    return rta;
}


