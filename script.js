document.querySelector('#add').onclick = function () {

    if (document.querySelector('#novaTarefa input').value == 0) {

        swal("Insira uma tarefa!", "Você precisa inserir uma tarefa no campo!", "error");

    } else {

        document.querySelector('#tarefas').innerHTML +=

            `

        <div class="tarefa">

        <span id="nomedaTarefa">
            
            ${document.querySelector('#novaTarefa input').value}
        
        </span>

        <button class="deletar"> 
        
        <i class="far fa-trash-alt"></i>
        
        </button>

        </div>
        
        `;


        var tarefa_a_ser_feita = document.querySelectorAll(".deletar"); {

            for (var i = 0; i < tarefa_a_ser_feita.length; i++) {

                tarefa_a_ser_feita[i].onclick = function () {

                    this.parentNode.remove();

                }

            }


        }



    }

}