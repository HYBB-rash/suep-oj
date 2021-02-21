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
    name: 'A+B Format (20 分)',
    difficult: 1,
    tag: 1,
    status: 3,
    passRate: 100
  }, {
    id: 2,
    name: 'Emergency',
    difficult: 1,
    tag: 1,
    status: 3,
    passRate: 100
  }, {
    id: 3,
    name: 'Spell It Right',
    difficult: 3,
    tag: 1,
    status: 2,
    passRate: 0
  }, {
    id: 4,
    name: 'Maximum Subsequence Sum',
    difficult: 2,
    tag: 1,
    status: 1,
    passRate: 0
  }, {
    id: 5,
    name: 'Product of Polynomials',
    difficult: 2,
    tag: 2,
    status: 2,
    passRate: 0
  }, {
    id: 6,
    name: 'World Cup Betting',
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

// 获取必刷榜榜单
export const getTopList = (data) => {
  return [{
    id: 1,
    name: 'A+B Format (20 分)',
    difficult: 1
  }, {
    id: 2,
    name: 'Emergency',
    difficult: 1
  }, {
    id: 3,
    name: 'Spell It Right',
    difficult: 3
  }, {
    id: 4,
    name: 'Maximum Subsequence Sum',
    difficult: 2
  }, {
    id: 5,
    name: 'Product of Polynomials',
    difficult: 2
  }, {
    id: 6,
    name: 'World Cup Betting',
    difficult: 3
  }]
}

// 获取博客热榜榜单
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

// 获取题目的测试数据
export const getTestExample = (data) => {
  const example = [
    {
      id: 1,
      ex: [
        {
          id: 1,
          input: '-1000000 9',
          output: '-999,991'
        }
      ]
    },
    {
      id: 2,
      ex: [
        {
          id: 1,
          input: '5 6 0 2\n' +
            '1 2 1 5 3\n' +
            '0 1 1\n' +
            '0 2 2\n' +
            '0 3 1\n' +
            '1 2 1\n' +
            '2 4 1\n' +
            '3 4 1',
          output: '2 4'
        }
      ]
    },
    {
      id: 3,
      ex: [
        {
          id: 1,
          input: '12345',
          output: 'one five'
        }
      ]
    },
    {
      id: 4,
      ex: [
        {
          id: 1,
          input: '10\n' +
            '-10 1 2 3 4 -5 -23 3 7 -21',
          output: '10 1 4'
        }
      ]
    },
    {
      id: 5,
      ex: [
        {
          id: 1,
          input: '2 1 2.4 0 3.2\n' +
            '2 2 1.5 1 0.5',
          output: '3 3 3.6 2 6.0 1 1.6'
        }
      ]
    },
    {
      id: 6,
      ex: [
        {
          id: 1,
          input: '1.1 2.5 1.7\n' +
            '1.2 3.1 1.6\n' +
            '4.1 1.2 1.1',
          output: 'T T W 39.31'
        }
      ]
    }
  ]
  for (const item of example) {
    if (item.id === Number(data.pid)) return item
  }
}

// 获取题解的榜单
export const getAnswerTopList = (data, problemId, index, size) => {
  index--
  const topList = [{
    id: 1,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '二叉搜索树的最简洁写法',
    content: '二叉搜索树的最简洁写法？二叉搜索树的最简洁写法？二叉搜索树的最简洁写法？二叉搜索树的最简洁写法？'
  }, {
    id: 2,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '非常简单直接爆破',
    content: '二叉搜索树的最简洁写法？这是模板提？为啥这么简单？如果不懂就参考下我的代码？'
  }, {
    id: 3,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '二叉搜索树的直观写法',
    content: '二叉搜索树的直观写法？二叉搜索树的直观写法？二叉搜索树的直观写法？二叉搜索树的直观写法？'
  }, {
    id: 4,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '非常简单直接爆破',
    content: '二叉搜索树的最简洁写法？这是模板提？为啥这么简单？如果不懂就参考下我的代码？'
  }, {
    id: 5,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '非常简单直接爆破',
    content: '二叉搜索树的最简洁写法？这是模板提？为啥这么简单？如果不懂就参考下我的代码？'
  }, {
    id: 6,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '非常简单直接爆破',
    content: '二叉搜索树的最简洁写法？这是模板提？为啥这么简单？如果不懂就参考下我的代码？'
  }, {
    id: 7,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '非常简单直接爆破',
    content: '二叉搜索树的最简洁写法？这是模板提？为啥这么简单？如果不懂就参考下我的代码？'
  }, {
    id: 8,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '非常简单直接爆破',
    content: '二叉搜索树的最简洁写法？这是模板提？为啥这么简单？如果不懂就参考下我的代码？'
  }, {
    id: 9,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '非常简单直接爆破',
    content: '二叉搜索树的最简洁写法？这是模板提？为啥这么简单？如果不懂就参考下我的代码？'
  }, {
    id: 10,
    icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    title: '非常简单直接爆破',
    content: '二叉搜索树的最简洁写法？这是模板提？为啥这么简单？如果不懂就参考下我的代码？'
  }]
  const start = index * size
  const end = start + size
  const ans = {
    count: 10,
    list: []
  }
  for (let i = 0; i < 10; i++) {
    if (i >= start && i < end) {
      ans.list.push(topList[i])
    }
  }
  return ans
}

// 获取详细的问题信息
export const getProblemDetail = (data) => {
  const detail = [
    {
      id: 1,
      value: '# 1001 A+B Format (20 分)\n' +
        '\n' +
        'Calculate *a*+*b* and output the sum in standard format -- that is, the digits must be separated into groups of three by commas (unless there are less than four digits).\n' +
        '\n' +
        '### Input Specification:\n' +
        '\n' +
        'Each input file contains one test case. Each case contains a pair of integers *a* and *b* where −106≤*a*,*b*≤106. The numbers are separated by a space.\n' +
        '\n' +
        '### Output Specification:\n' +
        '\n' +
        'For each test case, you should output the sum of *a* and *b* in one line. The sum must be written in the standard format.'
    },
    {
      id: 2,
      value: '# 1003 Emergency (25 分)\n' +
        '\n' +
        'As an emergency rescue team leader of a city, you are given a special map of your country. The map shows several scattered cities connected by some roads. Amount of rescue teams in each city and the length of each road between any pair of cities are marked on the map. When there is an emergency call to you from some other city, your job is to lead your men to the place as quickly as possible, and at the mean time, call up as many hands on the way as possible.\n' +
        '\n' +
        '### Input Specification:\n' +
        '\n' +
        'Each input file contains one test case. For each test case, the first line contains 4 positive integers: *N* (≤500) - the number of cities (and the cities are numbered from 0 to *N*−1), *M* - the number of roads, *C*1 and *C*2 - the cities that you are currently in and that you must save, respectively. The next line contains *N* integers, where the *i*-th integer is the number of rescue teams in the *i*-th city. Then *M* lines follow, each describes a road with three integers *c*1, *c*2 and *L*, which are the pair of cities connected by a road and the length of that road, respectively. It is guaranteed that there exists at least one path from *C*1 to *C*2.\n' +
        '\n' +
        '### Output Specification:\n' +
        '\n' +
        'For each test case, print in one line two numbers: the number of different shortest paths between *C*1 and *C*2, and the maximum amount of rescue teams you can possibly gather. All the numbers in a line must be separated by exactly one space, and there is no extra space allowed at the end of a line.'
    },
    {
      id: 3,
      value: '# 1005 Spell It Right (20 分)\n' +
        '\n' +
        'Given a non-negative integer *N*, your task is to compute the sum of all the digits of *N*, and output every digit of the sum in English.\n' +
        '\n' +
        '### Input Specification:\n' +
        '\n' +
        'Each input file contains one test case. Each case occupies one line which contains an *N* (≤10100).\n' +
        '\n' +
        '### Output Specification:\n' +
        '\n' +
        'For each test case, output in one line the digits of the sum in English words. There must be one space between two consecutive words, but no extra space at the end of a line.'
    },
    {
      id: 4,
      value: '# 1007 Maximum Subsequence Sum (25 分)\n' +
        '\n' +
        'Given a sequence of *K* integers { *N*1, *N*2, ..., *N**K* }. A continuous subsequence is defined to be { *N**i*, *N**i*+1, ..., *N**j* } where 1≤*i*≤*j*≤*K*. The Maximum Subsequence is the continuous subsequence which has the largest sum of its elements. For example, given sequence { -2, 11, -4, 13, -5, -2 }, its maximum subsequence is { 11, -4, 13 } with the largest sum being 20.\n' +
        '\n' +
        'Now you are supposed to find the largest sum, together with the first and the last numbers of the maximum subsequence.\n' +
        '\n' +
        '### Input Specification:\n' +
        '\n' +
        'Each input file contains one test case. Each case occupies two lines. The first line contains a positive integer *K* (≤10000). The second line contains *K* numbers, separated by a space.\n' +
        '\n' +
        '### Output Specification:\n' +
        '\n' +
        'For each test case, output in one line the largest sum, together with the first and the last numbers of the maximum subsequence. The numbers must be separated by one space, but there must be no extra space at the end of a line. In case that the maximum subsequence is not unique, output the one with the smallest indices *i* and *j* (as shown by the sample case). If all the *K* numbers are negative, then its maximum sum is defined to be 0, and you are supposed to output the first and the last numbers of the whole sequence.'
    },
    {
      id: 5,
      value: '# 1009 Product of Polynomials (25 分)\n' +
        '\n' +
        'This time, you are supposed to find *A*×*B* where *A* and *B* are two polynomials.\n' +
        '\n' +
        '### Input Specification:\n' +
        '\n' +
        'Each input file contains one test case. Each case occupies 2 lines, and each line contains the information of a polynomial:\n' +
        '\n' +
        '*K* *N*1 *a**N*1 *N*2 *a**N*2 ... *N**K* *a**N**K*\n' +
        '\n' +
        'where *K* is the number of nonzero terms in the polynomial, *N**i* and *a**N**i* (*i*=1,2,⋯,*K*) are the exponents and coefficients, respectively. It is given that 1≤*K*≤10, 0≤*N**K*<⋯<*N*2<*N*1≤1000.\n' +
        '\n' +
        '### Output Specification:\n' +
        '\n' +
        'For each test case you should output the product of *A* and *B* in one line, with the same format as the input. Notice that there must be **NO** extra space at the end of each line. Please be accurate up to 1 decimal place.'
    },
    {
      id: 6,
      value: '# 1011 World Cup Betting (20 分)\n' +
        '\n' +
        'With the 2010 FIFA World Cup running, football fans the world over were becoming increasingly excited as the best players from the best teams doing battles for the World Cup trophy in South Africa. Similarly, football betting fans were putting their money where their mouths were, by laying all manner of World Cup bets.\n' +
        '\n' +
        'Chinese Football Lottery provided a "Triple Winning" game. The rule of winning was simple: first select any three of the games. Then for each selected game, bet on one of the three possible results -- namely `W` for win, `T` for tie, and `L` for lose. There was an odd assigned to each result. The winner\'s odd would be the product of the three odds times 65%.\n' +
        '\n' +
        'For example, 3 games\' odds are given as the following:\n' +
        '\n' +
        '```\n' +
        ' W    T    L\n' +
        '1.1  2.5  1.7\n' +
        '1.2  3.1  1.6\n' +
        '4.1  1.2  1.1\n' +
        '```\n' +
        '\n' +
        'To obtain the maximum profit, one must buy `W` for the 3rd game, `T` for the 2nd game, and `T` for the 1st game. If each bet takes 2 yuans, then the maximum profit would be (4.1×3.1×2.5×65%−1)×2=39.31 yuans (accurate up to 2 decimal places).\n' +
        '\n' +
        '### Input Specification:\n' +
        '\n' +
        'Each input file contains one test case. Each case contains the betting information of 3 games. Each game occupies a line with three distinct odds corresponding to `W`, `T` and `L`.\n' +
        '\n' +
        '### Output Specification:\n' +
        '\n' +
        'For each test case, print in one line the best bet of each game, and the maximum profit accurate up to 2 decimal places. The characters and the number must be separated by one space.'
    }
  ]
  for (const item of detail) {
    if (item.id === Number(data.pid)) return item
  }
}

export const getComment = (data) => {
  const Comments = [
    {
      id: 1,
      comment: [
        {
          id: 1,
          name: 'hyong',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-19',
          content: '所列哇多卡呐',
          love: 231
        },
        {
          id: 2,
          name: 'admin',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-10',
          content: '扩列哇口裂哇',
          love: 2000
        },
        {
          id: 3,
          name: 'fff',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-01',
          content: '好像还可以',
          love: 74
        }
      ]
    },
    {
      id: 2,
      comment: [
        {
          id: 1,
          name: 'hyong',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-19',
          content: '所列哇多卡呐扩列哇口裂哇',
          love: 52
        },
        {
          id: 2,
          name: 'admin',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-10',
          content: '扩列哇口裂哇好像还可以',
          love: 65
        },
        {
          id: 3,
          name: 'fff',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-01',
          content: '好像还可以',
          love: 98
        }
      ]
    },
    {
      id: 3,
      comment: [
        {
          id: 1,
          name: 'hyong',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-19',
          content: '所列哇多卡呐好像还可以',
          love: 12
        },
        {
          id: 2,
          name: 'admin',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-10',
          content: '扩列哇口裂哇',
          love: 76
        },
        {
          id: 3,
          name: 'fff',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-01',
          content: '好像还可以扩列哇口裂哇',
          love: 32
        }
      ]
    },
    {
      id: 4,
      comment: [
        {
          id: 1,
          name: 'admin',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-19',
          content: '所列哇好像还可以扩列哇口裂哇多卡呐',
          love: 98
        },
        {
          id: 2,
          name: 'admin',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-10',
          content: '好像还可以扩列哇口裂哇',
          love: 29
        },
        {
          id: 3,
          name: 'admin',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-01',
          content: '好像还可以',
          love: 45
        }
      ]
    },
    {
      id: 5,
      comment: [
        {
          id: 1,
          name: 'hyong',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-19',
          content: '所列哇多卡呐',
          love: 39
        },
        {
          id: 2,
          name: 'admin',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-10',
          content: '扩列哇口裂哇',
          love: 98
        },
        {
          id: 3,
          name: 'fff',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-01',
          content: '好像还可以',
          love: 1
        }
      ]
    },
    {
      id: 6,
      comment: [
        {
          id: 1,
          name: 'hyong',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-19',
          content: '所列哇多卡呐',
          love: 67
        },
        {
          id: 2,
          name: 'admin',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-10',
          content: '扩列哇口裂哇',
          love: 13
        },
        {
          id: 3,
          name: 'demo',
          icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2021-02-01',
          content: '好像还可以',
          love: 91
        }
      ]
    }
  ]
  for (const item of Comments) {
    if (item.id === Number(data.pid)) return item.comment
  }
}
