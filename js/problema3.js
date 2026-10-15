document.addEventListener("DOMContentLoaded", () => {
    const d = document.getElementById("descripcion");
    const da = document.getElementById("datos");
    const f = document.getElementById("formula");
    const p = document.getElementById("procedimiento");
    const r = document.getElementById("resultado");
    const b = document.getElementById("boton");

    d.textContent = "Encuentra las tensiones";
    da.innerHTML = "m = 19.5<br>g = 9.8 m/s^2<br>sen a=118° <br>sen b =78°<br>sen c = 164° ";
    f.textContent = "a/sen a = b/sen b = c/sen c";
    p.innerHTML = "Calcular: 19.5kg(9.8m/s^2)<br> Identificar a, b y c <br> Sustituir <br> Despejar<br>Calcular: t1 = (191.1 N/sen 78°)(sen 118°)<br>Calcular: t2 = (191.1 N/sen 78°)(sen 164°)";
    r.innerHTML = ""

    console.log("Descripcion:", d.textContent);
    console.log("Datos:", da.textContent);
    console.log("Formula:", f.textContent);
    console.log("Calculo:", p.textContent);

    function mostrar() {
        r.innerHTML = "resultado: T1 = 172.5008 N <br> T2 = 53.8510 N ";
        console.log("Resultao final:", r.textContent);
    }

    b.addEventListener("click", mostrar);
})
