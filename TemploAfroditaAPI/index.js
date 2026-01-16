import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/oraculo", (req, res) => {
  res.json({
    dios: "Afrodita",
    mensaje: "El amor auténtico guía incluso en la incertidumbre",
    augurio: "favorable"
  });
});

app.get("/", (req, res) => {
  res.send("💖 Servidor del Templo de Afrodita activo");
});

app.listen(PORT, () => {
  console.log("💖 Oráculo de Afrodita activo");
});
