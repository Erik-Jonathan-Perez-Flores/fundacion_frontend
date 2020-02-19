<template>
    <div>
        <form>
            <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <label>Título:</label>
                <input type="text" class="form-control" placeholder="Introducir el título" v-model="cuestionario.title">
            </div>   
            <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <label>Descripción:</label>
                <textarea type="text" class="form-control" placeholder="Descripción del formulario" rows="4" v-model="cuestionario.description">
                </textarea>
            </div>

            <div>
                <div v-for="(cu,index) in cuestionario.question">
                  <div v-if="!cu.statusEdit">
                    <component :is="selectedComponent" :pruebaPosition="index"></component>  
                  </div>
                  <div v-else>
                      <div v-if="cu.tipoQuest=='text'">
                        <questionareTextEdit :positionQuestion="index" :dataQuestion="cu"></questionareTextEdit>
                      </div>
                      <div v-else-if="cu.tipoQuest=='select'">
                          <questionareSelectEdit :positionQuestion="index" :dataQuestion="cu"></questionareSelectEdit>
                      </div>
                      <div v-else-if="cu.tipoQuest=='selectMultiple'">
                          <questionareSelectMultipleEdit :positionQuestion="index" :dataQuestion="cu"></questionareSelectMultipleEdit>
                      </div>
                  </div>
                  
                
                </div>
                
            </div>
            <div class="form-group col-lg-2 col-md- col-sm-2 semanacol-xs-2">
              <a class="btn btn-success btnHide" v-on:click.prevent="generarCodigo" style="display:block">Nueva pregunta<i class="fa fa-plus-circle" aria-hidden="true"></i></a>
            </div>
            
         </form>
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
             <pre>{{cuestionario}}</pre>
         </div>
    </div>
</template>
<script>
    export default{
		name:'cuetionario',
        components:{
            questionareCreate:()=>import('./questionareCreate'),
            questionareTextEdit:()=>import('./cuestionarioOptionEdit/questionareTextEdit'),
            questionareSelectEdit:()=>import('./cuestionarioOptionEdit/questionareSelectEdit'),
            questionareSelectMultipleEdit:()=>import('./cuestionarioOptionEdit/questionareSelectMultipleEdit')
        },
        data() {
            return {
                cuestionario:{
                    title:"",
                    description:"",
                    question:[]
                   
                },
                  selectedComponent: ''
            }
        },
		created(){
		  this.$eventbus.$on('tipotexto',(data)=>{
            if (this.cuestionario.question[data] != undefined){
                 this.cuestionario.question.splice(data,1)
                 this.cuestionario.question.splice(data,0,{
                    tipoQuest:'text',
                    questionText:'',
                    requiredQuestion:false,
                    statusEdit:false
                 })
                    
            }
          })
          this.$eventbus.$on('tiposelect',(data)=>{
            if (this.cuestionario.question[data] != undefined){
                this.cuestionario.question.splice(data,1)
                this.cuestionario.question.splice(data,0,{
                    tipoQuest:'select',
                    questionText:'',
                    option:[],
                    requiredQuestion:false,
                    statusEdit:false
                 }) 
            }
          })
          this.$eventbus.$on('tiposelectMultiple',(data)=>{
            if (this.cuestionario.question[data] != undefined){
                 this.cuestionario.question.splice(data,1)
                 this.cuestionario.question.splice(data,0,{
                    tipoQuest:'selectMultiple',
                    questionText:'',
                    option:[],
                    requiredQuestion:false,
                    statusEdit:false
                 })   
            }
          }) 
          this.$eventbus.$on('preguntaText',(data)=>{
            this.cuestionario.question.splice(data.positionTexto,1)
                 this.cuestionario.question.splice(data.positionTexto,0,{
                    tipoQuest:'text',
                    questionText:data.preguntatext,
                    requiredQuestion:data.oblitex,
                    statusEdit:data.statusEdit
                 })
                
                
                $('.btnHide').css("display","block")
          })
          this.$eventbus.$on('preguntaSelect',(data)=>{
            this.cuestionario.question.splice(data.positionTexto,1)
                 this.cuestionario.question.splice(data.positionTexto,0,{
                    tipoQuest:'select',
                    questionText:data.preguntatext,
                    option:data.opciones,
                    requiredQuestion:data.oblitex,
                    statusEdit:data.statusEdit
                 })
                 $('.btnHide').css("display","block")
          })
          this.$eventbus.$on('preguntaSelectMultiple',(data)=>{
            this.cuestionario.question.splice(data.positionTexto,1)
                 this.cuestionario.question.splice(data.positionTexto,0,{
                    tipoQuest:'selectMultiple',
                    questionText:data.preguntatext,
                    option:data.opciones,
                    requiredQuestion:data.oblitex,
                    statusEdit:data.statusEdit
                 })
                 $('.btnHide').css("display","block")
          })
          this.$eventbus.$on('deleteQuestion',(data)=>{
                //console.log('asdasd')
                this.cuestionario.question.splice(data,1)
                $('.btnHide').css("display","block")
          })
          this.$eventbus.$on('preguntaTextEdit',(data)=>{
          this.cuestionario.question.splice(data.positionTexto,1)
               this.cuestionario.question.splice(data.positionTexto,0,{
                  tipoQuest:'text',
                  questionText:data.preguntatext,
                  requiredQuestion:data.oblitex,
                  statusEdit:data.statusEdit
               })
              
              
              $('.btnHide').css("display","block")
          })
          this.$eventbus.$on('preguntaSelectEdit',(data)=>{
            this.cuestionario.question.splice(data.positionTexto,1)
                 this.cuestionario.question.splice(data.positionTexto,0,{
                    tipoQuest:'select',
                    questionText:data.preguntatext,
                    option:data.opciones,
                    requiredQuestion:data.oblitex,
                    statusEdit:data.statusEdit
                 })
                 $('.btnHide').css("display","block")
          })
    },
    mounted(){
        this.$store.commit('SET_LAYOUT', 'layout-content')
           
    },
		methods:{
            generarCodigo:function(){
             this.cuestionario.question.push({
                tipoQuest:'text',
                questionText:'',
                requiredQuestion:false,
                statusEdit:false
                })
             this.selectedComponent='questionareCreate'
             $('.btnHide').css("display","none")
             
            }     
		}

	}
</script>
<style>
	
</style>