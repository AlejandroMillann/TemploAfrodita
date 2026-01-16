import express from "express";
import cors from "cors"; // <-- Importamos cors

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS para cualquier origen
app.use(cors());

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
