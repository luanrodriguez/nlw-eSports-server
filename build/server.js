import express from "express";
const app = express();
app.get("/ads", (request, response) => {
    return response.json([
        {
            id: 1,
            nome: "Anuncio 1",
        },
        {
            id: 2,
            nome: "Anuncio 2",
        },
    ]);
});
app.listen(3333);
