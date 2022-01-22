const productos = [
    { id: '1', stock: "3", categoria: 'lentes', name: "Lentes Kim", price: 1800, foto:'https://http2.mlstatic.com/D_NQ_NP_650358-MLA48010178441_102021-W.webp' },
    { id: '2', stock: "4", categoria: 'lentes', name: "Lentes Ibiza", price: 2000, foto:'https://http2.mlstatic.com/D_NQ_NP_936312-MLA43506360902_092020-W.webp' },
    { id: '3', stock: "5", categoria: 'lentes', name: "Lentes Rusty Pears", price: 1600, foto:'https://http2.mlstatic.com/D_NQ_NP_746375-MLA48170463519_112021-W.webp' },
    { id: '4', stock: "7", categoria: 'lentes', name: "Lentes The Guardian", price: 2000, foto:'https://http2.mlstatic.com/D_NQ_NP_680580-MLA48698151394_122021-W.webp' },
    { id: '5', stock: "9", categoria: 'gorros', name: "Gorro de lana Beanie", price: 800, foto:'https://http2.mlstatic.com/D_NQ_NP_797930-MLA46679695507_072021-W.webp' },
    { id: '6', stock: "6", categoria: 'gorros', name: "Gorro de lana Grueso", price: 1200, foto:'https://http2.mlstatic.com/D_NQ_NP_867998-MLA46586345185_072021-W.webp' },
    { id: '7', stock: "3", categoria: 'gorros', name: "Gorro de lana liso", price: 600, foto:'https://http2.mlstatic.com/D_NQ_NP_640307-MLA45361041969_032021-W.webp' }
];



export const getFetch = new Promise( (res,rej)=> {
    //acciones
    let condition= true
    if (condition) {
        setTimeout(()=>{
            //Acciones que quiero que se resuelvan
            res(productos)        
        }, 1000)
    }else{
        rej('404 not found')
    }
} )
