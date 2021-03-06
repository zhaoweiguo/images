
{
    "schema":"物的TSL描述schema",
    "link":"云端系统级uri,用来调用服务/订阅事件",
    "profile":{
        "productKey":"产品key"
    },
    "properties":[
        {
            "identifier":"属性唯一标识符(产品下唯一)",
            "name":"属性名称",
            "accessMode":"属性读写类型，只读(r)，读写(rw)",
            "required":"是否是标准功能的必选属性"
            "dataType":{
                "type":"属性类型: int(原生)，float(原生)，double(原生), text(原生)，date(String类型UTC毫秒)，bool(0或1的int类型)，enum(int类型), struct(结构体类型，可包含前面6种类型)，array(数组类型，支持int/double/float/text)",
                "specs":{
                    "min":"参数最小值(int, float, double类型特有)",
                    "max":"参数最大值(int, float, double类型特有)",
                    "unit":"属性单位",
                    "unitName":"单位名称",
                    "size":"数组大小，默认最大128(数组特有)",
                    "item":{
                        "type":"数组元素的类型"
                    }
                }
            }
        }
    ],
    "events":[
        {
            "identifier":"事件唯一标识符(产品下唯一，其中post是默认生成的属性上报事件)",
            "name":"事件名称",
            "desc":"事件描述",
            "type":"事件类型(info,alert,error)",
            "required":"是否是标准功能的必选事件",
            "outputData":[
                {
                    "identifier":"参数唯一标识符",
                    "name":"参数名称",
                    "dataType":{
                        "type":"属性类型: int(原生)，float(原生)，double(原生), text(原生)，date(String类型UTC毫秒)，bool(0或1的int类型)，enum(int类型), struct(结构体类型，可包含前面6种类型)，array(数组类型，支持int/double/float/text)",
                        "specs":{
                            "min":"参数最小值(int, float, double类型特有)",
                            "max":"参数最大值(int, float, double类型特有)",
                            "unit":"属性单位",
                            "unitName":"单位名称",
                            "size":"数组大小，默认最大128(数组特有)",
                            "item":{
                                "type":"数组元素的类型"
                            }
                        }
                    }
                }
            ],
            "method":"事件对应的方法名称(根据identifier生成)"
        }
    ],
    "services":[
        {
            "identifier":"服务唯一标识符(产品下唯一，产品下唯一，其中set/get是根据属性的accessMode默认生成的服务)",
            "name":"服务名称",
            "desc":"服务描述",
            "required":"是否是标准功能的必选服务",
            "inputData":[
                {
                    "identifier":"入参唯一标识符",
                    "name":"入参名称",
                    "dataType":{
                        "type":"属性类型: int(原生)，float(原生)，double(原生), text(原生)，date(String类型UTC毫秒)，bool(0或1的int类型)，enum(int类型), struct(结构体类型，可包含前面6种类型)，array(数组类型，支持int/double/float/text)",
                        "specs":{
                            "min":"参数最小值(int, float, double类型特有)",
                            "max":"参数最大值(int, float, double类型特有)",
                            "unit":"属性单位",
                            "unitName":"单位名称",
                            "size":"数组大小，默认最大128(数组特有)",
                            "item":{
                                "type":"数组元素的类型"
                            }
                        }
                    }
                }
            ],
            "outputData":[
                {
                    "identifier":"出参唯一标识符",
                    "name":"出参名称",
                    "dataType":{
                        "type":"属性类型: int(原生)，float(原生)，double(原生), text(原生)，date(String类型UTC毫秒)，bool(0或1的int类型)，enum(int类型), struct(结构体类型，可包含前面6种类型)，array(数组类型，支持int/double/float/text)",
                        "specs":{
                            "min":"参数最小值(int, float, double类型特有)",
                            "max":"参数最大值(int, float, double类型特有)",
                            "unit":"属性单位",
                            "unitName":"单位名称",
                            "size":"数组大小，默认最大128(数组特有)",
                            "item":{
                                "type":"数组元素的类型(数组特有)"
                            }
                        }
                    }
                }
            ],
            "method":"服务对应的方法名称(根据identifier生成)"
        }
    ]
}
