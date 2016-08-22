function adicionaItem(){
  $('#cadastra-item').empty();
  var novo_item = "<div>"+
                  "<input type='checkbox' name='nome' value='1'>" + novo_item.value +
                  "</div>";
var itens_gerais = document.querySelector('itens_gerais')[0];

itens_gerais.innerHTML = tabela.innerHTML + novo_item;

itens_gerais.value="";
};
