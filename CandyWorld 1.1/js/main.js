function cards() {
  const productos = [
      {
          "id": 1,
          "desc":"ALFAJORES",
          "tittle": "ALFAJOR MILKA MOUSSE LECHE 6u 42g",
          "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2021/08/1101848-247x247.png",
          "precio": "$1237,20"
      },
      {
          "id": 2,
          "desc":"SIMPLES",
          "tittle": "ALFAJOR FANTOCHE MINI ROSE 20u",
          "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2023/12/01901029-247x247.png",
          "precio": "$3.956,13"
      },
      {
          "id": 3,
          "desc":"TRIPLES",
          "tittle": "ALFAJOR FANTOCHE TRIPLE NIGHT 12u 85g",
          "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/05/01901019-1-247x247.png",
          "precio": "$6.468,95"
      },
      {
          "id": 4,
          "desc":"ALFAJORES",
          "tittle": "ALFAJOR FULBITO CHOCOLATE 40u 30g",
          "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2024/03/09901863-247x247.png",
          "precio": "$4.871,74"
      },
      {
          "id": 5,
          "desc":"ALFAJORES",
          "tittle": "ALFAJOR JORGITO BLANCO 50g",
          "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2023/04/05101013-247x247.png",
          "precio": "$572,72"
      },
      {
        "id": 6,
        "desc":"ALFAJORES",
        "tittle": "ALFAJOR JORGITO NEGRO 55g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2023/04/05101014-247x247.png",
        "precio": "$572,72"
    },
    {
        "id": 7,
        "desc":"ALFAJORES",
        "tittle": "ALFAJOR MAXI JORGELIN BLANCO 85g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2023/04/05101025-247x247.png",
        "precio": "$772,10"
    },
    {
        "id": 8,
        "desc":"CARAMELO",
        "tittle": "BUTTER TOFFEES CHOCOLATE 140g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2022/08/00901520-247x247.png",
        "precio": "$1.365,24"
    },
    {
        "id": 9,
        "desc":"CARAMELOS REFRESCANTES",
        "tittle": "MENTHO PLUS ACIDO NARANJA",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/07/00999301-247x247.png",
        "precio": "$5.327,86"
    },
    {
        "id": 10,
        "desc":"CARAMELOS VARIOS",
        "tittle": "BULL DOG TUTTI LIMON 12u 30g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/05/04173432-247x247.png",
        "precio": "$2.668,70"
    },
    {
        "id": 11,
        "desc":"CARAMELOS MASTICABLES",
        "tittle": "FLYNN PAFF FRUTA 70u",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/04/00601043-247x247.png",
        "precio": "$4.168,73"
    },
    {
        "id": 12,
        "desc":"BOMBONES Y BOCADITOS",
        "tittle": "BON O BON BLANCO 30u 15g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/06/00908624-1-247x247.png",
        "precio": "$7.990,95"
    },
    {
        "id": 13,
        "desc":"BOMBONES Y BOCADITOS",
        "tittle": "BOMBON MILKA OREO 13u 19g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2021/03/01126639-247x247.png",
        "precio": "$4.581,82"
    },
    {
        "id": 14,
        "desc":"BAÑO DE CHOCOLATE",
        "tittle": "BAÑO AGUILA LECHE S/TACC 150g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2021/10/04202017--247x247.png",
        "precio": "$1.865,25"
    },
    {
        "id": 15,
        "desc":"BOMBONES Y BOCADITOS",
        "tittle": "BOMBON ARCOR EL KIOSKO SURTIDO 246g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2021/03/00510732-247x247.png",
        "precio": "$4.814,72"
    },
    {
        "id": 16,
        "desc":"CARAMELOS REFRESCANTES",
        "tittle": "CHOCOLATE MILKA CON ALMENDRAS 155g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/05/01101330-1-247x247.png",
        "precio": "$3.551,92"
    },
    {
        "id": 17,
        "desc":"CHOCOLATES",
        "tittle": "COFLER BLOCK MITI MITI 170g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2022/03/00910865-247x247.png",
        "precio": "$3.178,50"
    },
    {
        "id": 18,
        "desc":"CHOCOLATES COMPACTOS",
        "tittle": "COFLER GRAFFITI BLANCO LECHE 45g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/07/00908235-247x247.png",
        "precio": "$719,27"
    },
    {
        "id": 19,
        "desc":"CHOCOLATES RELLENOS",
        "tittle": "KINDER BUENO 43g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/05/10002300-247x247.png",
        "precio": "$2.238,90"
    },
    {
        "id": 20,
        "desc":"GALLETITAS",
        "tittle": "RHODESIA MINI 60g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2021/11/10001222-247x247.png",
        "precio": "$1.009,10"
    },
    {
        "id": 21,
        "desc":"CARAMELOS REFRESCANTES",
        "tittle": "ROCKLETS 150g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/07/00910763-247x247.png",
        "precio": "$2.770,68"
    },
    {
        "id": 22,
        "desc":"CHUPETINES DUROS",
        "tittle": "CHUPETIN MR POPS EVOL BLUEBERRY 24u 18g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/05/00904509-247x247.png",
        "precio": "$2.732,76"
    },
    {
        "id": 23,
        "desc":"CHUPETINES DUROS",
        "tittle": "PICO DULCE 24u 14g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/04/00801133-247x247.png",
        "precio": "$3.002,95"
    },
    {
        "id": 24,
        "desc":"CHUPETINES DUROS",
        "tittle": "PICO DULCE 48u",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/05/00801130-247x247.png",
        "precio": "$5.999,14"
    },
    {
        "id": 25,
        "desc":"CHUPETINES",
        "tittle": "CHUPETÍN PALITOS DE LA SELVA 24u 18g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2023/05/00601056-247x247.jpg",
        "precio": "$4.251,59"
    },
    {
        "id": 26,
        "desc":"CRACKERS Y TOSTADAS",
        "tittle": "CRACKERS LA PROVIDENCIA 303g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/10/03501004-247x247.png",
        "precio": "$926,88"
    },
    {
        "id": 27,
        "desc":"DULCES Y RELLENAS",
        "tittle": "DIVERSION 398g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2022/07/00920124-247x247.png",
        "precio": "$1.479,95"
    },
    {
        "id": 28,
        "desc":"DULCES Y RELLENAS",
        "tittle": "MANA VAINILLA RELLENA FRUTILLA 152g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2021/02/00502081-247x247.png",
        "precio": "$951,19"
    },
    {
        "id": 29,
        "desc":"DULCES Y RELLENAS",
        "tittle": "Bulbasaur",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2021/11/12001005-247x247.png",
        "precio": "$726,91"
    },
    {
        "id": 30,
        "desc":"VARIEDAD NUEVO MIX 390g",
        "tittle": "Bulbasaur",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2022/05/10002517-247x247.png",
        "precio": "$1.611,56"
    },
    {
        "id": 31,
        "desc":"CRACKERS Y TOSTADAS",
        "tittle": "9 DE ORO AGRIDULCE 200g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/05/11001016-247x247.png",
        "precio": "$677,64"
    },
    {
        "id": 32,
        "desc":"GALLETITAS",
        "tittle": "9 DE ORO CLASICO 200g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2024/01/11001008-247x247.jpg",
        "precio": "$677,64"
    },
    {
        "id": 33,
        "desc":"GOMITAS DE GELATINA",
        "tittle": "MOGUL OSITOS 12u 30g-1999",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/08/00904999-247x247.png",
        "precio": "$3.566,85"
    },
    {
        "id": 34,
        "desc":"GOMITAS",
        "tittle": "YUMMY MORITAS 500g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2021/07/02701238-247x247.png",
        "precio": "$3.007,81"
    },
    {
        "id": 35,
        "desc":"GOMITAS DE GELATINA",
        "tittle": "MOGUL TUBITOS EXT FRUT 16u 20g",
        "image": "https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2024/05/00903516-247x247.png",
        "precio": "$4.766,01"
    }
  ];

  const contenedorCards = document.getElementById("contenedor_cards");
    
    function mostrarProductos(productosMostrados) {
        let cardsHTML = "";
        productosMostrados.forEach(producto => {
            cardsHTML += `
                <div class="card" style="width: 15rem; margin: 20px; border-style: none;">
                    <img src="${producto.image}" class="card-img-top logo" alt="${producto.tittle}">
                    <div class="card-body">
                        <p class="card-text montserrat-boldnormal-desc">${producto.desc}</p>
                        <h5 class="card-title montserrat-boldnormal" style="font-size: 15px">${producto.tittle}</h5>
                        <p class="card-text montserrat-semibold" style="margin-top: -10px">${producto.precio}</p>
                    </div>
                </div>
            `;
        });
        contenedorCards.innerHTML = cardsHTML;
    }

    // Mostrar todos los productos al cargar la página
    mostrarProductos(productos);

    // Obtener el input de búsqueda
    const inputBusqueda = document.getElementById("inputBusqueda");

    // Agregar un listener al input de búsqueda para filtrar productos
    inputBusqueda.addEventListener("input", function() {
        const textoBusqueda = inputBusqueda.value.trim().toLowerCase();
        console.log(textoBusqueda); // Verifica el valor de textoBusqueda en la consola

        const productosFiltrados = productos.filter(producto => {
            return producto.tittle.toLowerCase().includes(textoBusqueda);
        });
        mostrarProductos(productosFiltrados);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    cards();
});