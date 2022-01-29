- Para obtener los examenes hacer un GET a /exams 

La respuesta de tipo 200 tiene el tipo
`[
   {
    name: string, id: string
    }   
]`
- Para obtener un examen en particular hacer un GET a exams-information/:param1

La respuesta de tipo 200 tiene el tipo
`
{
    id: string;
    title: string;
    description: string,
    questions: [
        id: string;
        type: string,
        question: string;
        options?: [String]
    ],
}`

- Para obtener la calificación debería hacer un POST, pero en este ejemplo usé un GET para traer cualquier calificación (solo por ahorro de tiempo)
`
{
    examId: string,
    questions: [{
        id: string;
        type: string,
        question: string;
        options?: [string]
    }]
}`
