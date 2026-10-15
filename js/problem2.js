document.addEventListener("DOMContentLoaded", () => {
    const d = document.getElementById("descripcion");
    const da = document.getElementById("datos");
    const f = document.getElementById("formula");
    const p = document.getElementById("procedimiento");
    const r = document.getElementById("resultado");
    const b = document.getElementById("boton");

    d.textContent = "Un flecha en aceleracion";
    da.innerHTML = "vi = 0 m/s<br>vf = 40 m/s<br>tiempo = 0.5s";
    f.textContent = "a=(vf-vi)/t";
    p.innerHTML = "Calcular: a=(40-0)/0.5";
    r.textContent = ""

    console.log("Descripcion:", d.textContent);
    console.log("Datos:", da.textContent);
    console.log("Formula:", f.textContent);
    console.log("Calculo:", p.textContent);

    function mostrar() {
        r.textContent = "resultado: 80 m/s^2";
        console.log("Resultao final:", r.textContent);
    }

    b.addEventListener("click", mostrar);
})
