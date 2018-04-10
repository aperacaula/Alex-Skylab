# Comandos útiles

## Básicos
- mkdir "...": crea carpeta
- cd "...": entra en un directorio
- cd .. : sale al directorio padre
- touch "...": crea un documento
- ls: lista el contenido del directorio actual
- pwd: te muestra el path
- . : hace referencia al directorio presente
- clear: limpia la consola

### Ejemplos:

```sh
MacBook-Pro:Alex$   mkdir New_Folder
MacBook-Pro:Alex$  cd New_Folder
MacBook-Pro:Alex$  touch text.txt
MacBook-Pro:Alex/New_Folder$  ls
text.txt
MacBook-Pro:Alex/New_Folder$  pwd
/Alex/New_Folder

```
## Otros básicos de edición
- mv "..." "...": cambia el nombre del documento
- rm "...": elimina un fichero
- echo "..."> "name".txt: manera alternativa de crear
- rmdir: elimina directorio si está vacío
- rm -rf: elimina directorio esté como esté

## Consulta

- grep -r . -e "...": busca y muestra los normes documentos con contenido X
- cat "...": muestra el contenido 
- open "...": abre un documento por defecto

MD: Alt+Shift+F helps with formatting