// 获取所有的问题种类标签列表
export const getAllProblemTags = (data) => {
  return {
    tags: [{
      value: '1',
      label: '二叉树'
    }, {
      value: '2',
      label: 'DFS'
    }, {
      value: '3',
      label: '动态规划'
    }]
  }
}

// 获取所有的问题难度列表
export const getAllProblemDifficult = (data) => {
  return {
    difficult: [{
      value: 1,
      label: '简单'
    }, {
      value: 2,
      label: '中等'
    }, {
      value: 3,
      label: '困难'
    }],
    options3: [{
      value: 1,
      label: '未完成'
    }, {
      value: 2,
      label: '未通过'
    }, {
      value: 3,
      label: '已通过'
    }]
  }
}

// 获取用户所有的问题完成状态的列表
export const getAllProblemStatusByUserId = (data, userId) => {
  return {
    status: [{
      value: 1,
      label: '未完成'
    }, {
      value: 2,
      label: '未通过'
    }, {
      value: 3,
      label: '已通过'
    }]
  }
}

// 按条件搜索所有题目
export const searchAllProblemStatus = (data, index, size, userId, name, tag, difficult, status) => {
  const problems = [{
    id: 1,
    name: '二叉树的历遍',
    difficult: 1,
    tag: 1,
    status: 3,
    passRate: 100
  }, {
    id: 2,
    name: '构建完全二叉树',
    difficult: 1,
    tag: 1,
    status: 3,
    passRate: 100
  }, {
    id: 3,
    name: '手写红黑树',
    difficult: 3,
    tag: 1,
    status: 2,
    passRate: 0
  }, {
    id: 4,
    name: '二叉平衡树的旋转方式',
    difficult: 2,
    tag: 1,
    status: 1,
    passRate: 0
  }, {
    id: 5,
    name: '寻找宝藏',
    difficult: 2,
    tag: 2,
    status: 2,
    passRate: 0
  }, {
    id: 6,
    name: '数字三角形',
    difficult: 3,
    tag: 3,
    status: 1,
    passRate: 0
  }]
  if (name !== null && name !== '') {
    for (let i = 0; i < problems.length; i++) {
      if (problems[i].name !== name) {
        problems.splice(i, 1)
        i--
      }
    }
  }
  if (difficult !== null) {
    difficult = Number(difficult)
    for (let i = 0; i < problems.length; i++) {
      if (problems[i].difficult !== difficult) {
        problems.splice(i, 1)
        i--
      }
    }
  }
  if (tag !== null) {
    tag = Number(tag)
    for (let i = 0; i < problems.length; i++) {
      if (problems[i].tag !== tag) {
        problems.splice(i, 1)
        i--
      }
    }
  }
  if (status !== null) {
    status = Number(status)
    for (let i = 0; i < problems.length; i++) {
      if (problems[i].status !== status) {
        problems.splice(i, 1)
        i--
      }
    }
  }
  return problems
}

export const getTopList = (data) => {
  return [{
    id: 1,
    name: '二叉树的历遍',
    difficult: 1
  }, {
    id: 2,
    name: '构建完全二叉树',
    difficult: 1
  }, {
    id: 3,
    name: '手写红黑树',
    difficult: 3
  }, {
    id: 4,
    name: '二叉平衡树的旋转方式',
    difficult: 2
  }, {
    id: 5,
    name: '寻找宝藏',
    difficult: 2
  }, {
    id: 6,
    name: '数字三角形',
    difficult: 3
  }]
}

export const getBlogTopList = (data) => {
  return [{
    id: 1,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '这公司要求什么学历？',
    content: '这公司要求什么学历？这公司要求什么学历？这公司要求什么学历？这公司要求什么学历？'
  }, {
    id: 2,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: 'Huawei 在线机考笔试题请教？',
    content: '在线机考笔试题请教？在线机考笔试题请教？在线机考笔试题请教？在线机考笔试题请教？'
  }, {
    id: 3,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '计算机专业是否有必要考研？？',
    content: '计算机专业是否有必要考研？计算机专业是否有必要考研？计算机专业是否有必要考研？计算机专业是否有必要考研？'
  }, {
    id: 4,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '腾讯网易字节面经（C++，腾讯和字节是iOS岗）？',
    content: '腾讯网易字节面经？腾讯网易字节面经？腾讯网易字节面经？腾讯网易字节面经？'
  }, {
    id: 5,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '「前端面试」知识点总结？',
    content: '知识点总结？知识点总结？知识点总结？知识点总结？'
  }, {
    id: 6,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '2021 届 shopee 提前批一面+秋招一面二面凉经？',
    content: '秋招一面二面凉经？秋招一面二面凉经？秋招一面二面凉经？秋招一面二面凉经？'
  }, {
    id: 7,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: 'jsliang 求职系列 - 01 - JavaScript 基础？',
    content: 'JavaScript？JavaScript？JavaScript？JavaScript？'
  }, {
    id: 8,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '死磕考研失败，应当如何参与社招？',
    content: '死磕考研失败？死磕考研失败？死磕考研失败？死磕考研失败？'
  }, {
    id: 9,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '面试应答有哪些话术和技巧？？',
    content: '面试应答有哪些话术和技巧？面试应答有哪些话术和技巧？面试应答有哪些话术和技巧？面试应答有哪些话术和技巧？'
  }, {
    id: 10,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '2021 秋招面经总结 —— 数据库Mysql 篇（中）？',
    content: '秋招面经总结？秋招面经总结？秋招面经总结？秋招面经总结？'
  }]
}

export const getTestExample = (data, id) => {
  console.log(id)
  return [{
    id: 1,
    input: '10\n' +
      '1 2 3 4 5 6 7 8 9 0\n',
    output: '6 3 8 1 5 7 9 0 2 4'
  }, {
    id: 2,
    input: '10\n' +
      '1 2 3 4 5 6 7 8 9 0\n',
    output: '6 3 8 1 5 7 9 0 2 4'
  }]
}
