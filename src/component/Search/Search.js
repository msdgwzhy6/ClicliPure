import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { getSearch } from '../../asset/js/get'
import { $theme } from '../../asset/js/const'
import ListView from '../ListView/ListView'
import Icon from '../../src/widget/Icon/Icon'

export default function Search(props) {
  let timer = null
  const [post, setPost] = useState([])
  function change(text) {
    clearTimeout(timer)
    timer = setTimeout(() => getSearch(text).then(res => setPost(res.posts)), 500)
  }
  return (
    <View style={s.container}>
      <View style={s.head}>
        <Icon name={'back'} size={24} color={$theme} style={s.back} onPress={() => props.navigation.goBack()} />
        <TextInput
          style={s.search}
          selectionColor={$theme}
          underlineColorAndroid='transparent'
          maxLength={20}
          placeholder={'搜索一下下菊花又不会坏(⊙o⊙)…'}
          placeholderTextColor='rgba(148,108,230,.5)'
          onChangeText={change}
        ></TextInput>
      </View>
      <ListView data={post} push={props.navigation.navigate} flag={true} />
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
    flex: 1
  },
  head: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
    marginRight: 20
  },
  title: {
    fontSize: 24,
    color: $theme,
    paddingLeft: 20
  },
  back: {
    margin: 10
  },
  search: {
    flex: 1,
    backgroundColor: 'rgba(148,108,230,.1)',
    borderRadius: 30,
    padding: 10,
    paddingLeft: 20,
    color: $theme
  }
})
