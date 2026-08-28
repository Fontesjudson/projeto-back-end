const tarefas = [];
 function listarTodas() {
    return tarefas;
 }

 function buscarPorId(id) {
    return tarefas.find(t => t.id === id);
 }

 function adicionar(tarefas) {
    tarefas.push(tarefa);
    return tarefa;
 }
 
Module.exports = { listarTodas, buscarPorId, adicionar };