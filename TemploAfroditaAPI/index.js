import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "https://templo-afrodita.surge.sh"
}));

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

app.listen(PORT, "0.0.0.0", () => {
  console.log(`💖 Oráculo activo en puerto ${PORT}`);
});
