# Mapa del Olimpo — Templo de Afrodita (Equipo Afrodita)

| Plataforma | Tipo (static / API) | URL | Qué muestra / evidencia |
|------------|---------------------|-----|-------------------------|
| Surge | static | https://templo-afrodita.surge.sh | Templo de Afrodita con manifiesto del dios y estandarte que indica despliegue en Surge |
| Render | API | https://temploafrodita-api.onrender.com | Endpoint /api/oraculo que devuelve JSON temático de Afrodita |

---

## Endpoints (backend)

**Endpoint disponible:**

GET https://temploafrodita-api.onrender.com/api/oraculo

**Ejemplo de respuesta:**

```json
{
  "dios": "Afrodita",
  "mensaje": "El amor auténtico guía incluso en la incertidumbre",
  "augurio": "favorable"
}

---

##Más preguntas

Problemas encontrados:
El problema principal que hemos encontrado ha sido con el CORS, ya que no nos dejaba utilizar la API con el JSON dentro del html porque necesitábamos CORS.
Además el inicio del Git nos ha costado hacerlo, y teníamos problemas para ver los cambios reflejados con cada commit dentro de las páginas.

Qué haríamos en producción:
Lo que haríamos en producción sería corregir todos los errores si es que los hay y dejar el html, css y js más bonito y presentable.
