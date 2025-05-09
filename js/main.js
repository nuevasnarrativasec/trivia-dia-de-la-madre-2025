

    //fix for send analitics for preview.
    var isPreview = "False".toLowerCase();
    if (!isPreview) {
        isPreview = "false";
    }


    (function() {
        var shouldSendReport = false;
        var msg;

        //if (typeof game != 'undefined') {
        try {

            window.gameData = {
                gameLocale: "es-ES",
                gameId: "b516b5b7-3804-4aec-8426-a9ff0e31a32d",
                gameSpecificData:{  
                   "results":[  
                      {  
                         "id":"24ba162a-fbbd-460c-9c31-547a8fc28ffe",
                         "image":{  
                            "originalImageURL":"", 
                            "croppedImageURL":"",
                            "coords":{  
                               "x":106,
                               "y":4,
                               "width":763,
                               "height":572
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         },
                         "html": "<div class=\"box_kill_bill\"><\/div>",
                         "text":"El modelo de mamá gallina por excelencia. Madre solo hay una, pero como Elaine, muchas. Le cuesta soltar a sus hijos, pero es inteligente y sabe que no puede detener su camino de crecimiento, aún cuando eso implique que se muden solas o solos (o con la pareja) o que emprendan un viaje con una banda rockera en una época en la que se le hacía honor el lema “sexo, drogas y rock and roll”. Es la madre que, si no le contestas el celular llamará a tu mejor amiga o amigo para preguntarle por ti, y, probablemente, ellos reciban el sermón antes que tú: miren esa maravillosa escena en la que Frances McDormand reprende Billy Crudop (Russell Hammond), el guitarrista canchero y exitoso que baja la voz y responde educadamente ante las palabras maternas. Lo que usted diga, señora.",
                         "title":"Elaine Miller"
                      },
                      {  
                         "id":"73c82448-0f29-45dc-8346-a43aa94a3cbb",
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":0,
                               "y":53,
                               "width":2334,
                               "height":1752
                            },
                            "imageSize":"landscape",
                            "width":"639",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         },
                         "html": "<div class=\"box_harley\"><\/div>",
                         "text":"No hay nada más importante que la familia y mamá se encargará de educarte en esa consigna. A pesar de ser una mujer elástica, esta madre no educa hijos inútiles e irresponsables. No, no. Aunque es cierto que le ha costado un poco soltar a sus crías, y aceptar que no son todo lo que ella quisiera, sino que son una persona diferente, independiente, que cortó el cordón umbilical cuando nació y que debe ayudarles a crecer desde esa premisa. Es una madre que aprende constantemente. En un momento de su vida entiende que tiene que potenciar sus talentos y darles el ejemplo en un asunto importante: no puede olvidarse de ella, de sus necesidades y de su desarrollo como mujer. ",
                         "title":"Hellen Parr - Elasticgirl"
                      },
                      {  
                         "id":"1d6e095e-8880-4dfa-9fcd-5d79111b4ddb",
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":0,
                               "y":0,
                               "width":1920,
                               "height":1440
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         },
                         "html": "<div class=\"box_lisa\"><\/div>",
                         "text":"Parece que no fuera su prioridad ser madre, pero nada más falso. Esta mujer extraordinaria hace malabares para cuidar y educar a sus hijos y no dejar de lado su trabajo, al cual también se entrega fervientemente. No, no es una mala madre, solo es distinta. No tiene por qué dejar de trabajar y de crecer personal y profesionalmente, aunque es verdad que termina mucho más agotada y va a requerir ayuda, y eso no está mal. Su compromiso social con la justicia es parte de la forma en la que educa a sus hijos. Esta mamá educa con el ejemplo. Aunque no estaría mal que le preste un poco más de atención a su vida personal, por supuesto.",
                         "title":"Erin Brockovich"
                      },
                      {  
                         "id":"b85a1216-3b52-4120-abe8-4d703d9ddcbd",
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":0,
                               "y":0,
                               "width":620,
                               "height":465
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         },
                         "html": "<div class=\"box_merida\"><\/div>",
                         "text":"La sensibilidad de esta madre es infinita. Nadie como ella para salir de situaciones difíciles con delicadeza, con firmeza, con cariño, y, por si fuera poco, ayudando a los demás. Es reservada, pero no esconde sus sentimientos. Sabe acompañar procesos dolorosos ajenos y no le huye al suyo propio. Sabe ser amiga y compañera de sus hijas e hijos, les alienta en la búsqueda de la felicidad y de su propio camino en la vida. Es la mejor compañía para ver una película, para ir al teatro, para salir a caminar.",
                         "title":"Manuela"
                      },
                      {  
                         "id":"4ee8c087-c1ad-4548-8d9e-d60bd16353de",
                         "image":{  
                            "originalImageURL":"img/woods.jpg",
                            "croppedImageURL":"img/woods.jpg",
                            "coords":{ 
                               "x":0,
                               "y":0,
                               "width":1149,
                               "height":861
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         },
                         "html": "<div class=\"box_woods\"><\/div>",
                         "text":"Es la madre capaz de incendiar el mundo por sus cachorros. Nadie como ella para llevar la batuta en medio de situaciones conflictivas y para enseñar defensa personal. Te preparará para lo duro de la vida, sin duda, pero con amor. Y aunque parezca sobreprotectora, lo cierto es que la vida la empujó a tomar esa actitud. Sobre todo, si tu especialidad es meterte siempre en problemas o si tu vida está constantemente en peligro. Ok, no exageremos.",
                         "title":"Sarah Connor"
                      },
                      {  
                        "id":"4ee8c087-c1ad-4548-8d9e-d60bd16353gg",
                        "image":{  
                           "originalImageURL":"img/woods.jpg",
                           "croppedImageURL":"img/woods.jpg",
                           "coords":{ 
                              "x":0,
                              "y":0,
                              "width":1149,
                              "height":861
                           },
                           "imageSize":"landscape",
                           "width":"640",
                           "height":"480",
                           "isAnimated":false,
                           "fileType":"jpg",
                           "originalFileType":"jpg",
                           "credentials":{  
                              "type":"NA",
                              "value":""
                           }
                        },
                        "html": "<div class=\"box_mamma\"><\/div>",
                        "text":"La mama – mejor amiga existe y no es tan difícil de encontrar. Si además comparte intereses contigo, serás probablemente la envidia de tus amistades. Ojo, no es una madre descocada, sino una que no ha perdido el toque de aquello que sabe hacerla feliz y, además, ha aprendido a compartirlo con su progenie. Tal vez salga de los bordes de lo convencional, y eso está perfecto. En realidad, tal vez tu madre es una mezcla de todas las madres de este test: por ejemplo, puede quemar el mundo mientras tararea una canción de Abba.",
                        "title":"Donna Sheridan"
                     }
                   ],
                   "questions":[  
                      {  
                         "id":"dad482e2-e90c-4627-820f-a263f71d9a19",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"Estás en secundaria y pides permiso para ir a una fiesta con tus amigos. Tu mamá:",
                         "answers":[ 

                           {  
                              "id":"29ef1aa0-b8e3-4249-854b-1f9c1360120f",
                              "image":null,
                              "results":{  
                                 "4ee8c087-c1ad-4548-8d9e-d60bd16353gg":"1"
                              },
                              "text":"Sugiere hacer la fiesta en casa y hasta se ofrece para ayudarte en la organización. "
                           },
                            {  
                               "id":"c1fa6830-a368-4099-8e48-64abbf55fbda",
                               "image":null,
                               "results":{  
                                  "1d6e095e-8880-4dfa-9fcd-5d79111b4ddb":"2"
                               },
                               "text":"Te lleva y te recoge. Si es que te da permiso, claro."
                            },
                            {  
                              "id":"8b28c687-4e98-4561-b237-808a399f0550",
                              "image":null,
                              "results":{  
                                 "4ee8c087-c1ad-4548-8d9e-d60bd16353de":"1"
                              },
                              "text":"Vas, por supuesto. Sin condicionamiento alguno."
                           },
                            {  
                               "id":"08bdcae9-53c9-4af5-8216-b5fd018ba278",
                               "image":null,
                               "results":{  
                                  "24ba162a-fbbd-460c-9c31-547a8fc28ffe":"2"
                               },
                               "text":"Te da permiso, pero tienes que cumplir con la hora de retorno prometida."
                            },
                            {  
                               "id":"f16effcf-8414-4437-8f46-84dd7c5e333a",
                               "image":null,
                               "results":{  
                                  "b85a1216-3b52-4120-abe8-4d703d9ddcbd":"1"
                               },
                               "text":"Vas, pero con la vecina."
                            },
                            {  
                               "id":"29ef1aa0-b8e3-4249-854b-1f9c1360110f",
                               "image":null,
                               "results":{  
                                  "73c82448-0f29-45dc-8346-a43aa94a3cbb":"1"
                               },
                               "text":"Te lleva, te recoge y tal vez esté vigilándote sin que te des cuenta."
                            }                            
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":130,
                               "y":0,
                               "width":1865,
                               "height":1398
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"41c612af-2496-4e2b-9463-34e2a3139e1e",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"Para el viaje de promoción, tu mamá:",
                         "answers":[ 
                           {  
                              "id":"fb7c7f25-bd2c-44ae-bebb-fcf017a06820",
                              "image":null,
                              "results":{  
                                 "4ee8c087-c1ad-4548-8d9e-d60bd16353de":"2"
                              },
                              "text":"Viajó con nosotros."
                           }, 
                            {  
                               "id":"87f1ec1d-5e9e-48ff-82e4-1e5480c5df5a",
                               "image":null,
                               "results":{  
                                  "b85a1216-3b52-4120-abe8-4d703d9ddcbd":"2"
                               },
                               "text":"Me pidió reportarme tres veces al día, que no vaya a fiestas y que no use drogas"
                            },
                            {  
                              "id":"ed9d8f99-8b92-4033-a917-1a1710d9470a",
                              "image":null,
                              "results":{  
                                 "73c82448-0f29-45dc-8346-a43aa94a3cbb":"2"
                              },
                              "text":"Me dijo que me divierta, que lo disfrute y que sea feliz."
                           },
                            {  
                               "id":"4168e534-00dc-4650-96ff-d9fe307d7a4e",
                               "image":null,
                               "results":{  
                                  "24ba162a-fbbd-460c-9c31-547a8fc28ffe":"2"
                               },
                               "text":"Me aconsejó que me divierta y que la llame cuando pueda"
                            },
                            {  
                               "id":"87f1ec1d-5e9e-48ff-82e4-1e5480c5df5a",
                               "image":null,
                               "results":{  
                                  "1d6e095e-8880-4dfa-9fcd-5d79111b4ddb":"2"
                               },
                               "text":"Le recomendó a los profesores y a la mamá que viajó con nosotros que ponga los ojos en mí."
                            }, 
                            {  
                              "id":"fb7c7f25-bd2c-44ae-bebb-fcf017a06821",
                              "image":null,
                              "results":{  
                                 "4ee8c087-c1ad-4548-8d9e-d60bd16353gg":"2"
                              },
                              "text":"Me dio tips de cosas por hacer para divertirme más con mis compañeros."
                           }
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":0,
                               "y":0,
                               "width":960,
                               "height":720
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"a19ba906-b35c-4a38-84b3-2ceccac0f3fc",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":" ¿Cómo es la relación de tu madre con sus hijos? (tú y tus hermanos o hermanas)",
                         "answers":[ 
                            
                            {  
                               "id":"b3f0ce34-debc-4607-bf17-3c12e7d0aa31",
                               "image":null,
                               "results":{  
                                  "24ba162a-fbbd-460c-9c31-547a8fc28ffe":"1"
                               },
                               "text":"Mi madre se lleva muy bien conmigo y mis hermanos(as). La prioridad de mi madre siempre es la familia."
                            },
                            {  
                              "id":"73c761c2-4d53-44f2-8960-786e0bf82c41",
                              "image":null,
                              "results":{  
                                 "4ee8c087-c1ad-4548-8d9e-d60bd16353gg":"1"
                              },
                              "text":"Es mi mejor amiga."
                           },
                           {  
                              "id":"11fd8a89-993b-4ac9-8893-6fc40e3a8e81",
                              "image":null,
                              "results":{  
                                 "b85a1216-3b52-4120-abe8-4d703d9ddcbd":"1"
                              },
                              "text":"Mi mamá es una persona que respeta mis espacios, pero conversa mucho conmigo. Nos llevamos bastante bien."
                           },
                            {  
                               "id":"fcc0a2b5-ecaa-4235-89bc-3ede5bf81ce1",
                               "image":null,
                               "results":{  
                                  "73c82448-0f29-45dc-8346-a43aa94a3cbb":"2"
                               },
                               "text":"Es bastante buena, aunque mi mamá trabaja mucho y pasa mucho tiempo en la oficina. Igual encuentra la forma de pasar tiempo con nosotros."
                            },                            
                            {  
                              "id":"5a4e7629-26e3-4dab-84e5-cff04a367f1c",
                              "image":null,
                              "results":{  
                                 "4ee8c087-c1ad-4548-8d9e-d60bd16353de":"1"
                              },
                              "text":"Mi madre es sobreprotectora y eso le crea conflictos, especialmente con mi(s) hermana(s)"
                           },
                            {  
                               "id":"73c761c2-4d53-44f2-8960-786e0bf82c40",
                               "image":null,
                               "results":{  
                                  "1d6e095e-8880-4dfa-9fcd-5d79111b4ddb":"1"
                               },
                               "text":"Es sobreprotectora, pero la entendemos, pues tuvimos una vida difícil."
                            }                            
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":305,
                               "y":0,
                               "width":1440,
                               "height":1080
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"b6d5d00a-a08e-4c18-ae4c-276347e1dfbb",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"Imaginemos que tienes un problema, que una persona te está chantajeando con un secreto que te da vergüenza. Tu madre se entera, ¿qué hace?:",
                         "answers":[  
                            {  
                               "id":"44b27af1-add3-4c47-9631-e9e178527c38",
                               "image":null,
                               "results":{  
                                  "1d6e095e-8880-4dfa-9fcd-5d79111b4ddb":"2"
                               },
                               "text":"Se va a sentir mal por no haberme dado la confianza suficiente para conocer mi secreto, pero luego me va defender y cuidar por sobre todas las cosas."
                            },                            
                            {  
                               "id":"bbeb33e3-7be0-4489-9189-1f11f0ab9a51",
                               "image":null,
                               "results":{  
                                  "24ba162a-fbbd-460c-9c31-547a8fc28ffe":"2"
                               },
                               "text":"Conversará conmigo e iremos a la policía o a la justicia o a la instancia que sea necesaria."
                            },
                            {  
                              "id":"aaec01f6-50c4-4f0e-b4de-fffcb407033f",
                              "image":null,
                              "results":{  
                                 "4ee8c087-c1ad-4548-8d9e-d60bd16353gg":"1"
                              },
                              "text":"No tengo ningún secreto con mi madre, así que ella me ayudaría a encarar el problema de la mejor manera."
                           },
                            {  
                               "id":"7f35dcc2-2dde-4a8e-871a-96650e3c22c5",
                               "image":null,
                               "results":{  
                                  "4ee8c087-c1ad-4548-8d9e-d60bd16353de":"2"
                               },
                               "text":"Estará a mi lado y me ayudará a resolverlo. De hecho, conoce varios de mis secretos, así que no me avergüenza hablar con ella."
                            },
                            {  
                               "id":"aaec01f6-50c4-4f0e-b4de-fffcb407033e",
                               "image":null,
                               "results":{  
                                  "73c82448-0f29-45dc-8346-a43aa94a3cbb":"1"
                               },
                               "text":"Si mi madre me ve en peligro ella es capaz de incendiar al mundo."
                            },
                            {  
                              "id":"429c990f-642b-4aeb-8804-d2a69f8cc5e6",
                              "image":null,
                              "results":{  
                                 "b85a1216-3b52-4120-abe8-4d703d9ddcbd":"2"
                              },
                              "text":"Conversará conmigo y lo resolveremos en familia."
                           }
                            
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":101,
                               "y":0,
                               "width":469,
                               "height":352
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"97c97b86-ea23-444e-8bac-358afa7703ad",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"Si pasas por un mal momento:",
                         "answers":[  
                            {  
                               "id":"aae11059-8438-4ab8-8db1-ebdb2e41d475",
                               "image":null,
                               "results":{  
                                  "24ba162a-fbbd-460c-9c31-547a8fc28ffe":"2"
                               },
                               "text":"Me abrazará fuerte, hará muchas preguntas, pero finalmente tratará de darme seguridad."
                            },
                            {  
                              "id":"76d31984-1769-4445-880f-8996da2bee39",
                              "image":null,
                              "results":{  
                                 "4ee8c087-c1ad-4548-8d9e-d60bd16353gg":"2"
                              },
                              "text":"Cantaremos juntas una canción y me abrazará fuerte. Probablemente terminemos bailando juntas."
                           },
                            {  
                               "id":"5eceb69e-6ca8-4661-8f46-3c7cccf9065c",
                               "image":null,
                               "results":{  
                                  "4ee8c087-c1ad-4548-8d9e-d60bd16353de":"1"
                               },
                               "text":"Buscará consolarme y organizará algo en familia para sobrellevar el mal rato."
                            },                            
                            {  
                               "id":"76d31984-1769-4445-880f-8996da2bee39",
                               "image":null,
                               "results":{  
                                  "73c82448-0f29-45dc-8346-a43aa94a3cbb":"1"
                               },
                               "text":"Me abrazará, comeremos mi comida favorita e iremos al teatro o veremos una película juntas."
                            },
                            {  
                               "id":"76d31984-1769-4445-880f-8996da2bee38",
                               "image":null,
                               "results":{  
                                  "b85a1216-3b52-4120-abe8-4d703d9ddcbd":"2"
                               },
                               "text":"Mi madre buscará que solucionemos juntos el problema."
                            },
                            {  
                              "id":"e2d3c807-209f-4213-8717-3455628c1cf4",
                              "image":null,
                              "results":{  
                                 "1d6e095e-8880-4dfa-9fcd-5d79111b4ddb":"2"
                              },
                              "text":"Mi madre no es muy sentimental, pero si paso un mal momento mi madre se enfocará en que resolvamos el problema a como de lugar."
                           }
                            
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":0,
                               "y":0,
                               "width":2957,
                               "height":2216
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"62a22d6d-ee60-4240-886e-4a79061ae2f8",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"¿Cuál de estas frases te hacer recordar a tu madre? ",
                         "answers":[                              
                            {  
                               "id":"d8e65fa8-6e25-439f-8d64-1757c3b9be1c",
                               "image":null,
                               "results":{  

                               },
                               "text":"Tienes más poder del que crees."
                            },
                            {  
                              "id":"5a5294e9-3aa8-4d32-9b23-1a8c9d4fc87d",
                              "image":null,
                              "results":{  

                              },
                              "text":"La vida es corta, el mundo es amplio."
                           },
                            {  
                               "id":"5b2d8c16-3fce-4883-8e91-e28455a175ae",
                               "image":null,
                               "results":{  

                               },
                               "text":"La vida es una lucha, pero se puede ganar."
                            },
                            {  
                              "id":"9983ffb4-2df8-488f-8ddd-b9ff1a96b89c",
                              "image":null,
                              "results":{  

                              },
                              "text":"No te drogues."
                           },
                            {  
                               "id":"78156eb5-d273-4e87-8e89-c71044dd7ecb",
                               "image":null,
                               "results":{  

                               },
                               "text":"No vayas a escribir sobre mí, eh."
                            },
                            {  
                               "id":"5a5294e9-3aa8-4d32-9b23-1a8c9d4fc87c",
                               "image":null,
                               "results":{  

                               },
                               "text":"No debes arriesgarte por nadie, ni siquiera por mí."
                            }                            
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":0,
                               "y":0,
                               "width":2797,
                               "height":2100
                            },
                            "imageSize":"landscape",
                            "width":"639",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"f2cb49e0-8344-4939-8bb1-ee97c33bf235",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"¿Qué característica asocias con tu mamá?",
                         "answers":[  
                           {  
                              "id":"9a03b37a-e774-4eca-8fca-4e7345331005",
                              "image":null,
                              "results":{  
                                 "4ee8c087-c1ad-4548-8d9e-d60bd16353de":"1"
                              },
                              "text":"Inteligente y sobria."
                           },
                            {  
                               "id":"209eed13-ded7-4124-b52e-bcf902fa2209",
                               "image":null,
                               "results":{  
                                  "73c82448-0f29-45dc-8346-a43aa94a3cbb":"1"
                               },
                               "text":"Maternal y acogedora."
                            },                            
                            {  
                               "id":"352fe284-7ca4-4902-a554-d5d340dd8140",
                               "image":null,
                               "results":{  
                                  "1d6e095e-8880-4dfa-9fcd-5d79111b4ddb":"2"
                               },
                               "text":"Decidida y lideresa."
                            },                            
                            {  
                               "id":"8eab6c0f-9b00-412c-8c0d-37433cf7b9a1",
                               "image":null,
                               "results":{  
                                  "b85a1216-3b52-4120-abe8-4d703d9ddcbd":"2"
                               },
                               "text":"Aguerrida y valiente."
                            },
                            {  
                              "id":"8eab6c0f-9b00-412c-8c0d-37433cf7b9a2",
                              "image":null,
                              "results":{  
                                 "4ee8c087-c1ad-4548-8d9e-d60bd16353gg":"2"
                              },
                              "text":"Trabajadora y siempre optimista."
                           },
                           {  
                              "id":"2908b1fe-83d4-485b-82f7-7ef628a0a104",
                              "image":null,
                              "results":{  
                                 "24ba162a-fbbd-460c-9c31-547a8fc28ffe":"2"
                              },
                              "text":"Sensata y honesta."
                           }
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":127,
                               "y":0,
                               "width":934,
                               "height":701
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"3cd2ec4a-319d-4cde-81c0-f6ff2fbf8016",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"Podrías decir que tu mamá:",
                         "answers":[  
                           {  
                              "id":"6d2e0dde-913f-4977-b62a-fef3d994698a",
                              "image":null,
                              "results":{  

                              },
                              "text":"Tiene alma de artista."
                           },                            
                            {  
                               "id":"9eae762b-aab6-48e7-9dcd-5f11d728dbc3",
                               "image":null,
                               "results":{  

                               },
                               "text":"Siempre pone a la familia primero."
                            },
                            {  
                               "id":"2f121781-be91-4b86-9697-0b3d1ba6e518",
                               "image":null,
                               "results":{  

                               },
                               "text":"Se involucra siempre en causas justas."
                            },                            
                            {  
                               "id":"6d2e0dde-913f-4977-b62a-fef3d994698b",
                               "image":null,
                               "results":{  

                               },
                               "text":"Es la persona más valiente que conozco."
                            },
                            {  
                              "id":"f41df4c7-59a0-4b6c-8d9a-90f6e50e6929",
                              "image":null,
                              "results":{  

                              },
                              "text":"Es sobreprotectora, pero aprendió a darnos nuestro espacio."
                           },
                            {  
                              "id":"6d2e0dde-913f-4977-b62a-fef3d994698c",
                              "image":null,
                              "results":{  

                              },
                              "text":"Siempre me ha enseñado a ver la parte más amable de la vida."
                           }
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":183,
                               "y":0,
                               "width":875,
                               "height":656
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"3eaa25f6-79a5-4d3d-893e-1dc88cbc16df",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"Cuando eras pequeño o pequeña tu mamá quería que tú:",
                         "answers":[  
                            {  
                               "id":"d90ea47a-c63a-4597-bd12-d146c26fcdf2",
                               "image":null,
                               "results":{  
                                  "b85a1216-3b52-4120-abe8-4d703d9ddcbd":"2"
                               },
                               "text":"Sea abogado/a"
                            }, 
                            {  
                               "id":"e7fc13c5-f4ff-4cb8-858f-071feb73e80f",
                               "image":null,
                               "results":{                                      
                                    "24ba162a-fbbd-460c-9c31-547a8fc28ffe":"2"
                               },
                               "text":"Haga lo que yo quiera. Me apoyará para seguir mis sueños."
                            },
                            {  
                               "id":"e7fc13c5-f4ff-4cb8-858f-071feb73e80g",
                               "image":null,
                               "results":{  
                                    "1d6e095e-8880-4dfa-9fcd-5d79111b4ddb":"2"
                               },
                               "text":"Me decía que busque mi misión en este mundo y la cumpla."
                            },
                            {  
                              "id":"8c475af8-c935-46be-a4e5-17196330712a",
                              "image":null,
                              "results":{  
                                 "4ee8c087-c1ad-4548-8d9e-d60bd16353de":"2"
                              },
                              "text":"Lo que sea que haga que mis talentos estén al servicio de los demás."
                           },
                            {  
                              "id":"e7fc13c5-f4ff-4cb8-858f-071feb73e80h",
                              "image":null,
                              "results":{  
                                   "4ee8c087-c1ad-4548-8d9e-d60bd16353gg":"2"
                              },
                              "text":"Que viaje por el mundo."
                           },
                           {  
                              "id":"f74b8647-035c-4705-bd54-1f3729efeb5d",
                              "image":null,
                              "results":{  
                                 "73c82448-0f29-45dc-8346-a43aa94a3cbb":"2"
                              },
                              "text":"Que me involucre para ayudar a quienes más lo necesitan."
                           },
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":143,
                               "y":0,
                               "width":1200,
                               "height":900
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"993c427b-ca17-4d8c-a40a-90573da97f24",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"Antes de ser su mamá, ella:",
                         "answers":[  
                           {  
                              "id":"ad8d38ab-9f41-4ed7-844d-58ebce55c311",
                              "image":null,
                              "results":{  
                                 "b85a1216-3b52-4120-abe8-4d703d9ddcbd":"2"
                              },
                              "text":"Trabajaba en lo que más le gustaba, pero lo dejó por un tiempo cuando se casó."
                           },
                            {  
                               "id":"a993abf1-6aa2-49d9-b7ec-002d0c95aaa5",
                               "image":null,
                               "results":{  
                                  "24ba162a-fbbd-460c-9c31-547a8fc28ffe":"2"
                               },
                               "text":"Siempre quiso tener hijos, pero nunca dejó de lado su profesión."
                            },                            
                            {  
                               "id":"4a4f23c9-0dce-4e61-8b54-838b6c84a5ae",
                               "image":null,
                               "results":{  
                                  "73c82448-0f29-45dc-8346-a43aa94a3cbb":"2"
                               },
                               "text":"Siempre destacó por su independencia e inteligencia. También porque se preocupaba mucho por su apariencia. En realidad, todo eso sigue igual."
                            },                            
                            {  
                               "id":"460b694c-0484-4e37-916e-08d38cc48916",
                               "image":null,
                               "results":{  
                                  "4ee8c087-c1ad-4548-8d9e-d60bd16353de":"2"
                               },
                               "text":"Era una mujer independiente que no pensaba ni en enamorarse ni en tener hijos."
                            },
                            {  
                              "id":"460b694c-0484-4e37-916e-08d38cc48915",
                              "image":null,
                              "results":{  
                                 "1d6e095e-8880-4dfa-9fcd-5d79111b4ddb":"2"
                              },
                              "text":"Vivía completamente dedicada a su vida profesional."
                           },
                            {  
                              "id":"460b694c-0484-4e37-916e-08d38cc48917",
                              "image":null,
                              "results":{  
                                 "4ee8c087-c1ad-4548-8d9e-d60bd16353gg":"2"
                              },
                              "text":"De joven fue muy independiente y se arriesgaba a hacer cosas que nadie más hacía."
                           }
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":320,
                               "y":0,
                               "width":960,
                               "height":720
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      }
                   ]
                },
                gameImg:"",
                patternData:{  
                   "gameThumb":{  
                      "originalImageURL":"",
                      "croppedImageURL":"079a99c8-99f8-41c6-8633-5e2842c17e80.jpg",
                      "coords":{  
                         "x":214,
                         "y":0,
                         "width":5340,
                         "height":4006
                      },
                      "imageSize":"thumbnail",
                      "width":"126",
                      "height":"83",
                      "isAnimated":false,
                      "fileType":"jpg",
                      "originalFileType":"jpg",
                      "credentials":{  
                         "type":"NA",
                         "value":""
                      }
                   },
                   "Footer":null,
                   "totalTime":5278629,
                   "articleStartTime":1455564591011,
                   "gameShareImage":{  
                      "originalImageURL":"",
                      "croppedImageURL":"3578ddfa-cd8a-4a5b-8cd8-cd49ba6523c9.jpg",
                      "coords":{  
                         "x":0,
                         "y":237,
                         "width":6002,
                         "height":3159
                      },
                      "imageSize":"facebookFreeForm",
                      "width":"6002",
                      "height":"3159",
                      "isAnimated":false,
                      "fileType":"jpg",
                      "originalFileType":"jpg",
                      "credentials":{  
                         "type":"NA",
                         "value":""
                      }
                   },
                   "answerOrder":"random"
                },
                
                //first time published 
                                relevancy:"public",
                isPublic:"False"!= "True",
                // #branded - search for this keyword to find all locations of brand code 
                                isBranded:"False",
                locale:"es-ES",
                translatedFrom:"b516b5b7-3804-4aec-8426-a9ff0e31a32d",
                originalLocale:"es-ES",
                wasCreatedBeforeWeStartedCollectingEvents:"false"=== "true"
            };
        } catch (e) {
            console.log('speed-exception', (e));

            shouldSendReport = true;
            msg = "gameData not created: " + e.message;
        }

        //try catch object.freeze on window.gameData for freezeing the object
        try {
            Object.freeze(window.gameData);
        } catch (ex) {
            console.log('speed-exception', (ex));

            var console = console || {};
            console.log = console.log || function(){};
            console.log("Object.freeze failed");
        }

        (function() {
            try {
                if(!window.gameData) {
                    shouldSendReport = true;
                    msg = msg || "gameData not created";
                } else {
                    if(window.String && String.isNullOrEmpty) {
                        shouldSendReport = shouldSendReport || String.isNullOrEmpty(gameData.patternId) || String.isNullOrEmpty(gameData.gameName) || String.isNullOrEmpty(gameData.creatorName);
                        msg = msg || "gameData not created";
                    }
                }
            } catch (e) {
                console.log('speed-exception', (e));

                shouldSendReport = true;
                msg = "gameData not created: " + e.message;
            }
        })();

        var ignoredPatternsArray = ["list","countdown","videosnaps","shorts", "story"];
        if(isPreview  =="false" && $.inArray(window.gameData.patternId.toLowerCase(),ignoredPatternsArray) == -1)
        {
            AwsBridge.articleLoaded();
        }


        window.canonicalName = "http://elcomercio.pe";

        (function(){
            window.SI = {
                samplingDisabled : "false" == "true",
                samplingClientsPercentage : Number("100")
            };

        }());


        (function(){
            try{
                window.pbUrlToShare = "";
                window.shareBarParams = "{}";
                window.shareUsingSdk= "False" == "True";
                window.isFBWebView = "False" == "True";
                $(document).trigger("shareParamsLoaded");
            }
            catch (e) {
                console.log('speed-exception', (e));

                shouldSendReport = true;
                msg = msg || " shareBar not created: " + e.message;
            }

        })();

        (function(){
            window.userLanguages = !!navigator.languages && navigator.languages.length > 0 ? navigator.languages.join('|') : '';
            window.userLanguages = window.userLanguages + '|' +  gameData.locale;
        })();

    })();

