## 搜索组件模板

我们在写业务的时候，经常会用到搜索条件去查询某些业务，可能常见的就是将搜索查询条件，写成一个组件，然后在引入这个组件，但是这种方案是可以，但是达不到代码和业务的共用，所以我们封装了一个配置项的搜索组件，更写json一样的传入即可，且支持响应式。

## react

react版本的搜索组件模板，案例如下:point_down:

```typescript
// 部分代码
import DefaultSearchCompent from '@/components/searchCompent'
const FindTemplate = memo(function FindTemplate() {

  const defaultData = moment().format('YYYY-MM')

  const [ defaultValueSearch,setDefaultValueSearch] = useSetState({
    names:'lgf',
    lange:2,
    date3:defaultData
  });

  const defaultSearchConfig:optionsType<selectListType>[] = [
    {
      title:'姓名',
      key:'names',
      type:'input',
      defaultValue:'lgf'
    },
    {
      title:'语言',
      key:'lange',
      type:'select',
      selectListValue:langeList,
      selectLableName:'label',
      selectKeyValue:'value',
      defaultValue:2
    },
    {
      title:'月份',
      key:'date3',
      type:'monthDatePicker',
      defaultValue:defaultData
    },
  ];
  return (
    <div className='bgW padding-10px'>
      <DefaultSearchCompent options={defaultSearchConfig} callBack={setDefaultValueSearch} />
    </div>
  )
})
```

## vue

vue版本的搜索组件模板，案例如下:point_down:

```vue
<template>
    <QueryTemplate
      name="default"
      :options="defaultConfig"
      @submit="onDefaultSubmit"
      @reset="onDefaultReset"
    ></QueryTemplate>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import moment from 'moment'
import QueryTemplate, { OptionsType } from '@/components/search-template'
import { SelectListItemType } from '@/types/common'
import { enumLangList } from '@/utils/enum'

function useDefaultSearch() {
  const defaultConfig = reactive<OptionsType<SelectListItemType>[]>([
    {
      title: '姓名',
      fieldName: 'names',
      type: 'input',
      defaultValue: 'lgf'
    },
    {
      title: '语言',
      fieldName: 'lange',
      type: 'select',
      optionList: enumLangList,
      labelName: 'label',
      valueName: 'value',
      defaultValue: 2
    },
    {
      title: '月份',
      fieldName: 'date3',
      type: 'monthDatePicker',
      defaultValue: moment().format('YYYY-MM')
    }
  ])

  function onDefaultSubmit(values: any) {
    console.log('onDefaultSubmit', values)
  }

  function onDefaultReset(values: any) {
    console.log('onDefaultReset', values)
  }
  return {
    defaultConfig,
    onDefaultSubmit,
    onDefaultReset
  }
}

export default defineComponent({
  components: {
    QueryTemplate
  },
  setup() {
    const defaultData = useDefaultSearch()
    return {
      defaultConfig: defaultData.defaultConfig,
      onDefaultSubmit: defaultData.onDefaultSubmit,
      onDefaultReset: defaultData.onDefaultReset
    }
  }
})
</script>

```

## Available Props

| props                                                        | type               | **default value** | **description**          |
| ------------------------------------------------------------ | :----------------- | ----------------- | ------------------------ |
| options                                                      | Options            | Options[]         | 配置项                   |
| callBack(event: KeyboardEvent, handler: HotkeysEvent) => void | （val:any) => void | {}                | 搜索组件触发的默认回调值 |

### Options

```typescript
export interface optionsType<T = any,k = any> {
  title: string; // 名称
  key: string; // key值，要传入后台的值属性
   /*
   类型 ，支持，input，select，cascader，timeRangeSelection，
   showTimeRangePicker，monthDatePicker，dayDatePicker
   */
  type: string; 
  selectListValue?: T[], // 类型为select，才传入有效
  selectLableName?:string, // 类型为select，才传入有效
  selectKeyValue?:string, // 类型为select，才传入有效
  selectListchildren?: k[], // 类型为select，才传入有效
  defaultValue?:any, // 默认值
  onChange?: any, // 改变的回调函数
  placeholder?:any // 文本提示语
}
```

