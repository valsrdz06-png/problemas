document.addEventListener("DOMContentLoaded", () => {
    const d = document.getElementById("descripcion");
    const da = document.getElementById("datos");
    const f = document.getElementById("formula");
    const p = document.getElementById("procedimiento");
    const r = document.getElementById("resultado");
    const b = document.getElementById("boton");

    d.textContent = "Un tren reduce su velocidad";
    da.innerHTML = "vi = 60 km/h<br>vf = 20 km/h<br>tiempo = 8s";
    f.innerHTML = "a=(vf-vi)/t<br>km/h(5/18)=m/s";
    p.innerHTML = "calcular vi=60km/h(5/18)<br>calcular vf=20km/h(5/18)<br>Calcular: a=(5.555-16.666)/8";
    r.textContent = ""

    console.log("Descripcion:", d.textContent);
    console.log("Datos:", da.textContent);
    console.log("Formula:", f.textContent);
    console.log("Calculo:", p.textContent);

    function mostrar() {
        r.textContent = "resultado: -1.3888 m/s^2";
        console.log("Resultao final:", r.textContent);
    }

    b.addEventListener("click", mostrar);
})
