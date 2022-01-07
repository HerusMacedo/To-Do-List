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


        var remover = document.querySelectorAll(".deletar"); {

            for (var i = 0; i < remover.length; i++) {

                remover[i].onclick = function () {

                    this.parentNode.remove();

                }

            }

            var riscar_tarefa = document.querySelectorAll(".tarefa");

            for (var i = 0; i < riscar_tarefa.length; i++) {

                riscar_tarefa[i].onclick = function (){

                    this.classList.toggle('completed')

                }

            }




        }


        document.querySelector("#novaTarefa input").value = "";


    }

}