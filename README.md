# devfestBack
BackEnd programado para functionar con google Cloud Functions

Instalar Google Cloud Functions

**gcloud components update**

**gcloud components install beta**


===================================
Publicar la funcion hola


branch feature/hola

**gcloud beta functions deploy hola --runtime nodejs8 --trigger-http --project devfestcancun**


===================================

branch feature/correo

Publicar la funcion correo

**gcloud beta functions deploy correo --runtime nodejs8 --trigger-http --project devfestcancun**
