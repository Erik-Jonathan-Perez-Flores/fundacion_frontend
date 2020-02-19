<template>
    <div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
         <h3 align="center">Pregunta de selección múltiple</h3>
      </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Ingresar Pregunta:</label>
                  <textarea class="form-control" rows="4" v-model="preguntatext" v-on:keyup="dimensionText"></textarea>
                </div>
            </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <center><h4 class="distanciaButton">Opciones creadas</h4></center>
            <div v-if="OptionSelect.length>0">
                <div v-for="(op,index) in OptionSelect">
                <div class="col-lg-4 col-md-3 col-sm-2 col-xs-12">
                    <label class="checkbox" disabled>
                    <input type="checkbox" name="rsvp" disabled>
                    {{op.TitleOption}}&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="btn btn-danger btn-xs"><i class="fa fa-window-close" aria-hidden="true" v-on:click.prevent="deleteOpcion(index)"></i></button>
                  </label>
                </div>
                </div>
            </div>
            <div v-else>
                <div class="panel panel-default">
                  <div class="panel-body">
                      <center><h5>No tienes opciones creadas</h5></center>
                  </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="addOptions" style="display:none" >
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <form class="form-inline">
                      <div class="form-group">
                        <label for="email">Nombre de la opcion:</label>
                        <input type="text" class="form-control" v-model="textOption" v-on:keyup="dimensionOption">
                      </div>
                      <button type="submit" class="btn btn-success btn-xs buttonadd" v-on:click.prevent="agregarOpcion" disabled>agregar</button>
                      <button  class="btn btn-danger btn-xs" v-on:click.prevent="removeOption">cancelar</button>
                      <br>
                      <p class="text-danger hideOptionText">{{errors.opcionText}}</p>
                    </form>
                </div>
            </div>
        </div>
        <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12 createOption" style="display:block">
              <a class="btn btn-primary btn-sm" v-on:click.prevent="addOption">Crear opcion <i class="fa fa-plus-circle" aria-hidden="true"></i>
              </a>
        </div> 
        
        <div class="col-lg-3 col-lg-offset-9 col-md-4 col-md-offset-8 col-sm-12 col-xs-12">
              <label class="oblicuopru">Obligatorio: <input type="checkbox" v-model="oblitex"></label>
        </div>
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p class="text-danger ErrorHide" style="display:block">{{errors.textdimension}}</p>
          <p class="text-danger ErrorHideOption">{{errors.opcionCantidad}}</p>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
          <div class="form-group pull-right">
              <button type="button" class="btn btn-success btn-md  buttonsave" v-on:click.prevent="insertQuestionSelect" disabled>Guardar</button>
              <button type="button" class="btn btn-danger btn-md  buttoncancel" v-on:click.prevent="cancelarInsert">cancelar</button>
            
          </div>
        </div>
    </div>
</template>
 
<script>
    export default {
      name:'questionnaireSelectMultiple',
      props:['positionQuestion'],
      data(){
        return{
            preguntatext:'',
            textOption:'',
            oblitex:false,
            OptionSelect:[],
            errors:{
              textdimension:'* La pregunta debe tener mayor a 50 y menor a 500',
              opcionCantidad:'* Las opciones deben ser 2 o mas',
              opcionText:'* La opcion debe tener mayor a 6 y menor de 30'
            }

        }
      },
      created(){

      },
      methods:{
        insertQuestionSelect:function(){
            this.$eventbus.$emit('preguntaSelectMultiple',{
              positionTexto:this.positionQuestion,
              preguntatext:this.preguntatext,
              oblitex:this.oblitex,
              opciones:this.OptionSelect,
              statusEdit:true
            })
        },
        generarCodigoSelect:function(){
            this.OptionSelect.push({
                titleSelect:''
            })
        },
        addOption:function(){
            $(".addOptions").css("display","block");
            $(".createOption").css("display","none")
            
        },
        removeOption:function(){
            $(".addOptions").css("display","none");
            $(".createOption").css("display","block")
            this.textOption=''
             $('.buttonadd').prop("disabled",true)
             $('.hideOptionText').css("display",'block')
        },
        agregarOpcion:function(){
            if (this.OptionSelect.length>=1
                &&this.preguntatext.length>50
                &&this.preguntatext.length<300) {
                  this.OptionSelectAdd()
                  $('.buttonsave').prop("disabled",false)
                  $('.buttonadd').prop("disabled",true)
                  $('.ErrorHideOption').css("display",'none')
            }
            else if (this.OptionSelect.length>=1){
                this.OptionSelectAdd()
                $('.ErrorHideOption').css("display","none")
                $('.buttonadd').prop("disabled",true)
            }
            else{
                this.OptionSelectAdd()
                $('.buttonadd').prop("disabled",true)
                $('.hideOptionText').css("display",'block')
            }
        },
        dimensionText:function(){
          if (this.preguntatext.length>50
              &&this.preguntatext.length<300
              &&this.OptionSelect.length>1) {
              $('.ErrorHide').css("display","none")
              $('.buttonsave').prop("disabled",false)
          }
          else if (this.preguntatext.length>50
              &&this.preguntatext.length<300){
              $('.ErrorHide').css("display","none")
          }
          else{
            $('.ErrorHide').css("display","block")
            $('.buttonsave').prop("disabled",true)
          }
        },
        OptionSelectAdd:function(){
          this.OptionSelect.push({
                TitleOption:this.textOption
            })
            $(".addOptions").css("display","none");
            this.textOption=''
            $(".createOption").css("display","block")
        },
        dimensionOption:function(){
           if(this.textOption.length>=6
              && this.textOption.length<=30){
              $('.buttonadd').prop("disabled",false)
              $('.hideOptionText').css("display",'none')
           }
           else{
              $('.buttonadd').prop("disabled",true)
              $('.hideOptionText').css("display",'block')
           }
        },
        cancelarInsert:function(){
            this.$eventbus.$emit('deleteQuestion',this.positionQuestion)
          },
        deleteOpcion:function(index){
          this.OptionSelect.splice(index,1)

          if (this.preguntatext.length>50
              &&this.preguntatext.length<300
              &&this.OptionSelect.length>1) {
              $('.buttonsave').prop('disabled',false)

          }
          else if(this.OptionSelect.length<2){
              $('.buttonsave').prop('disabled',true)
              $('.ErrorHideOption').css("display","block")
          }
        } 
        
      },
      computed:{

      }   
    }
</script>
 
<style scoped>
    div.card {
        color: #856404;
        border: 4px solid #ffeeba;
    }
    .distanciaButton{
        margin-bottom: 20px;
    }
</style> 