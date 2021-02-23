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

export const getPaperContent = (data) => {
  const content = [
    {
      id: 1,
      content: '# Auto Rename Tag\n' +
        '\n' +
        '[![Marketplace Version](https://vsmarketplacebadge.apphb.com/version/formulahendry.auto-rename-tag.svg)](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) [![Installs](https://vsmarketplacebadge.apphb.com/installs/formulahendry.auto-rename-tag.svg)](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) [![Rating](https://vsmarketplacebadge.apphb.com/rating/formulahendry.auto-rename-tag.svg)](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) [![Build Status](https://travis-ci.org/formulahendry/vscode-auto-rename-tag.svg?branch=master)](https://travis-ci.org/formulahendry/vscode-auto-rename-tag)\n' +
        '\n' +
        'Automatically rename paired HTML/XML tag, same as Visual Studio IDE does.\n' +
        '\n' +
        '## Sponsors\n' +
        '\n' +
        '[![Tabnine](https://github.com/formulahendry/vscode-auto-rename-tag/raw/master/images/tabnine.png)](http://wd5a.2.vu/1)\n' +
        '\n' +
        'Increase your coding productivity with Tabnine’s AI code completions! Tabnine is a free powerful Artificial Intelligence assistant designed to help you code faster, reduce mistakes, and discover best coding practices - without ever leaving the comfort of VS Code.\n' +
        '\n' +
        'Tabnine is trusted by more than a million developers worldwide. [Get it now](http://wd5a.2.vu/1).\n' +
        '\n' +
        '<p><a title="Try CodeStream" href="https://sponsorlink.codestream.com/?utm_source=vscmarket&amp;utm_campaign=autorenametag&amp;utm_medium=banner"><img src="https://alt-images.codestream.com/codestream_logo_autorenametag.png"></a><br>\n' +
        'Eliminate context switching and costly distractions. Create and merge PRs and perform code reviews from inside your IDE while using jump-to-definition, your keybindings, and other IDE favorites.<br> <a title="Try CodeStream" href="https://sponsorlink.codestream.com/?utm_source=vscmarket&amp;utm_campaign=autorenametag&amp;utm_medium=banner">Learn more</a></p>\n' +
        '\n' +
        '\n' +
        '## Book for VS Code\n' +
        '\n' +
        '[《Visual Studio Code 权威指南》](https://union-click.jd.com/jdc?e=jdext-1261348777639735296-0&p=AyIGZRhbHQsWAVIaXxEyEgRdG1sRBxU3EUQDS10iXhBeGlcJDBkNXg9JHUlSSkkFSRwSBF0bWxEHFRgMXgdIMkRxFAUJD1RQZT0cBnwKDE4%2BaDpgB2ILWStbHAIQD1QaWxIBIgdUGlsRBxEEUxprJQIXNwd1g6O0yqLkB4%2B%2FjcePwitaJQIWD1cfWhwKGwVSG1wlAhoDZc31gdeauIyr%2FsOovNLYq46cqca50ytrJQEiXABPElAeEgRSG1kQCxQBUxxZHQQQA1YTXAkDIgdUGlscChECXRs1FGwSD1UbWRALFwRWK1slASJZOxoLRlUXU1NONU9QEkdXWRlJbBUDVB9TFgAVN1caWhcA)：带你深入浅出 VS Code！\n' +
        '\n' +
        '![Book](https://github.com/formulahendry/vscode-auto-rename-tag/raw/master/images/book.jpg)\n' +
        '\n' +
        '## ❤️ Contributors\n' +
        '\n' +
        'Kudos to [@SimonSiefke](https://github.com/SimonSiefke) for rewriting the logic of this extension!\n' +
        '\n' +
        '## Features\n' +
        '\n' +
        '- When you rename one HTML/XML tag, automatically rename the paired HTML/XML tag\n' +
        '\n' +
        '## Usages\n' +
        '\n' +
        '![Usage](https://github.com/formulahendry/vscode-auto-rename-tag/raw/master/images/usage.gif)\n' +
        '\n' +
        '## Configuration\n' +
        '\n' +
        'Add entry into `auto-rename-tag.activationOnLanguage` to set the languages that the extension will be activated.\n' +
        'By default, it is `["*"]` and will be activated for all languages.\n' +
        '\n' +
        '```json\n' +
        '{\n' +
        '  "auto-rename-tag.activationOnLanguage": ["html", "xml", "php", "javascript"]\n' +
        '}\n' +
        '```\n' +
        '\n' +
        'The setting should be set with language id defined in [VS Code](https://github.com/Microsoft/vscode/tree/master/extensions). Taking [javascript definition](https://github.com/Microsoft/vscode/blob/master/extensions/javascript/package.json) as an example, we need to use `javascript` for `.js` and `.es6`, use `javascriptreact` for `.jsx`. So, if you want to enable this extension on `.js` file, you need to add `javascript` in settings.json.\n' +
        '\n' +
        '## Note\n' +
        '\n' +
        'From 1.44, VS Code offers the built-in [Rename On Type](https://code.visualstudio.com/updates/v1_44#_synced-regions) support for HTML and Handlebars that can be enabled with the setting `editor.renameOnType`. If this setting is enabled, this extension will skip HTML and Handlebars files regardless of the languages listed in `auto-rename-tag.activationOnLanguage`\n' +
        '\n' +
        '## Change Log\n' +
        '\n' +
        'See Change Log [here](https://github.com/formulahendry/vscode-auto-rename-tag/blob/master/CHANGELOG.md)\n' +
        '\n' +
        '## Issues\n' +
        '\n' +
        'Submit the [issues](https://github.com/formulahendry/vscode-auto-rename-tag/issues) if you find any bug or have any suggestion.\n' +
        '\n' +
        '## Contribution\n' +
        '\n' +
        'Fork the [repo](https://github.com/formulahendry/vscode-auto-rename-tag) and submit pull requests.\n' +
        '\n' +
        '<!--\n' +
        'TODO REACT BUG: const Navigation = ()=><>\n' +
        '</>\n' +
        'type nav\n' +
        '-->'
    },
    {
      id: 2,
      content: '<p align="center">\n' +
        '<!--<img src="scoop.png" alt="Long live Scoop!"/>-->\n' +
        '    <h1 align="center">Scoop</h1>\n' +
        '</p>\n' +
        '<p align="center">\n' +
        '<b><a href="https://github.com/lukesampson/scoop#what-does-scoop-do">Features</a></b>\n' +
        '|\n' +
        '<b><a href="https://github.com/lukesampson/scoop#installation">Installation</a></b>\n' +
        '|\n' +
        '<b><a href="https://github.com/lukesampson/scoop/wiki">Documentation</a></b>\n' +
        '</p>\n' +
        '\n' +
        '\n' +
        '- - -\n' +
        '\n' +
        '<p align="center" >\n' +
        '    <a href="https://github.com/lukesampson/scoop">\n' +
        '        <img src="https://img.shields.io/github/languages/code-size/lukesampson/scoop.svg" alt="Code Size" />\n' +
        '    </a>\n' +
        '    <a href="https://github.com/lukesampson/scoop">\n' +
        '        <img src="https://img.shields.io/github/repo-size/lukesampson/scoop.svg" alt="Repository size" />\n' +
        '    </a>\n' +
        '    <a href="https://ci.appveyor.com/project/lukesampson/scoop">\n' +
        '        <img src="https://ci.appveyor.com/api/projects/status/05foxatmrqo0l788?svg=true" alt="Build Status" />\n' +
        '    </a>\n' +
        '    <a href="https://discord.gg/s9yRQHt">\n' +
        '        <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />\n' +
        '    </a>\n' +
        '    <a href="https://gitter.im/lukesampson/scoop">\n' +
        '        <img src="https://badges.gitter.im/lukesampson/scoop.png" alt="Gitter Chat" />\n' +
        '    </a>\n' +
        '    <a href="https://github.com/lukesampson/scoop/blob/master/LICENSE">\n' +
        '        <img src="https://img.shields.io/github/license/lukesampson/scoop.svg" alt="License" />\n' +
        '    </a>\n' +
        '</p>\n' +
        '\n' +
        '\n' +
        'Scoop is a command-line installer for Windows.\n' +
        '\n' +
        '## What does Scoop do?\n' +
        '\n' +
        'Scoop installs programs from the command line with a minimal amount of friction. It tries to eliminate things like:\n' +
        '\n' +
        '- Permission popup windows\n' +
        '- GUI wizard-style installers\n' +
        '- Path pollution from installing lots of programs\n' +
        '- Unexpected side-effects from installing and uninstalling programs\n' +
        '- The need to find and install dependencies\n' +
        '- The need to perform extra setup steps to get a working program\n' +
        '\n' +
        'Scoop is very scriptable, so you can run repeatable setups to get your environment just the way you like, e.g.:\n' +
        '\n' +
        '```powershell\n' +
        'scoop install sudo\n' +
        'sudo scoop install 7zip git openssh --global\n' +
        'scoop install aria2 curl grep sed less touch\n' +
        'scoop install python ruby go perl\n' +
        '```\n' +
        '\n' +
        'If you\'ve built software that you\'d like others to use, Scoop is an alternative to building an installer (e.g. MSI or InnoSetup) — you just need to zip your program and provide a JSON manifest that describes how to install it.\n' +
        '\n' +
        '## Requirements\n' +
        '\n' +
        '- Windows 7 SP1+ / Windows Server 2008+\n' +
        '- [PowerShell 5](https://aka.ms/wmf5download) (or later, include [PowerShell Core](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-6)) and [.NET Framework 4.5](https://www.microsoft.com/net/download) (or later)\n' +
        '- PowerShell must be enabled for your user account e.g. `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`\n' +
        '\n' +
        '## Installation\n' +
        '\n' +
        'Run the following command from your PowerShell to install scoop to its default location (`C:\\Users\\<user>\\scoop`)\n' +
        '\n' +
        '```powershell\n' +
        'Invoke-Expression (New-Object System.Net.WebClient).DownloadString(\'https://get.scoop.sh\')\n' +
        '\n' +
        '# or shorter\n' +
        'iwr -useb get.scoop.sh | iex\n' +
        '```\n' +
        '\n' +
        'Once installed, run `scoop help` for instructions.\n' +
        '\n' +
        'The default setup is configured so all user installed programs and Scoop itself live in `C:\\Users\\<user>\\scoop`.\n' +
        'Globally installed programs (`--global`) live in `C:\\ProgramData\\scoop`.\n' +
        'These settings can be changed through environment variables.\n' +
        '\n' +
        '### Install Scoop to a Custom Directory by changing `SCOOP`\n' +
        '\n' +
        '```powershell\n' +
        '$env:SCOOP=\'D:\\Applications\\Scoop\'\n' +
        '[Environment]::SetEnvironmentVariable(\'SCOOP\', $env:SCOOP, \'User\')\n' +
        '# run the installer\n' +
        '```\n' +
        '\n' +
        '### Configure Scoop to install global programs to a Custom Directory by changing `SCOOP_GLOBAL`\n' +
        '\n' +
        '```powershell\n' +
        '$env:SCOOP_GLOBAL=\'F:\\GlobalScoopApps\'\n' +
        '[Environment]::SetEnvironmentVariable(\'SCOOP_GLOBAL\', $env:SCOOP_GLOBAL, \'Machine\')\n' +
        '# run the installer\n' +
        '```\n' +
        '\n' +
        '## [Documentation](https://github.com/lukesampson/scoop/wiki)\n' +
        '\n' +
        '## Multi-connection downloads with `aria2`\n' +
        '\n' +
        'Scoop can utilize [`aria2`](https://github.com/aria2/aria2) to use multi-connection downloads. Simply install `aria2` through Scoop and it will be used for all downloads afterward.\n' +
        '\n' +
        '```powershell\n' +
        'scoop install aria2\n' +
        '```\n' +
        '\n' +
        'You can tweak the following `aria2` settings with the `scoop config` command:\n' +
        '\n' +
        '- aria2-enabled (default: true)\n' +
        '- [aria2-retry-wait](https://aria2.github.io/manual/en/html/aria2c.html#cmdoption-retry-wait) (default: 2)\n' +
        '- [aria2-split](https://aria2.github.io/manual/en/html/aria2c.html#cmdoption-s) (default: 5)\n' +
        '- [aria2-max-connection-per-server](https://aria2.github.io/manual/en/html/aria2c.html#cmdoption-x) (default: 5)\n' +
        '- [aria2-min-split-size](https://aria2.github.io/manual/en/html/aria2c.html#cmdoption-k) (default: 5M)\n' +
        '\n' +
        '## Inspiration\n' +
        '\n' +
        '- [Homebrew](http://mxcl.github.io/homebrew/)\n' +
        '- [sub](https://github.com/37signals/sub#readme)\n' +
        '\n' +
        '## What sort of apps can Scoop install?\n' +
        '\n' +
        'The apps that install best with Scoop are commonly called "portable" apps: i.e. compressed program files that run stand-alone when extracted and don\'t have side-effects like changing the registry or putting files outside the program directory.\n' +
        '\n' +
        'Since installers are common, Scoop supports them too (and their uninstallers).\n' +
        '\n' +
        'Scoop is also great at handling single-file programs and Powershell scripts. These don\'t even need to be compressed. See the [runat](https://github.com/ScoopInstaller/Main/blob/master/bucket/runat.json) package for an example: it\'s really just a GitHub gist.\n' +
        '\n' +
        '### Support this project\n' +
        '\n' +
        'If you find Scoop useful and would like to support ongoing development and maintenance, here\'s how:\n' +
        '\n' +
        '- [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DM2SUH9EUXSKJ) (one-time donation)\n' +
        '\n' +
        '## Known application buckets\n' +
        '\n' +
        'The following buckets are known to scoop:\n' +
        '\n' +
        '- [main](https://github.com/ScoopInstaller/Main) - Default bucket for the most common (mostly CLI) apps\n' +
        '- [extras](https://github.com/lukesampson/scoop-extras) - Apps that don\'t fit the main bucket\'s [criteria](https://github.com/lukesampson/scoop/wiki/Criteria-for-including-apps-in-the-main-bucket)\n' +
        '- [games](https://github.com/Calinou/scoop-games) - Open source/freeware games and game-related tools\n' +
        '- [nerd-fonts](https://github.com/matthewjberger/scoop-nerd-fonts) -  Nerd Fonts\n' +
        '- [nirsoft](https://github.com/kodybrown/scoop-nirsoft) - A subset of the [250](https://github.com/rasa/scoop-directory/blob/master/by-score.md#MCOfficer_scoop-nirsoft) [Nirsoft](https://nirsoft.net) apps\n' +
        '- [java](https://github.com/ScoopInstaller/Java) - Installers for Oracle Java, OpenJDK, Zulu, ojdkbuild, AdoptOpenJDK, Amazon Corretto, BellSoft Liberica & SapMachine\n' +
        '- [jetbrains](https://github.com/Ash258/Scoop-JetBrains) - Installers for all JetBrains utilities and IDEs\n' +
        '  <!-- * [nightlies](https://github.com/ScoopInstaller/Nightlies) - No longer used -->\n' +
        '- [nonportable](https://github.com/TheRandomLabs/scoop-nonportable) - Non-portable apps (may require UAC)\n' +
        '- [php](https://github.com/ScoopInstaller/PHP) - Installers for most versions of PHP\n' +
        '- [versions](https://github.com/ScoopInstaller/Versions) - Alternative versions of apps found in other buckets\n' +
        '\n' +
        'The main bucket is installed by default. To add any of the other buckets, type:\n' +
        '\n' +
        '```\n' +
        'scoop bucket add bucketname\n' +
        '```\n' +
        '\n' +
        'For example, to add the extras bucket, type:\n' +
        '\n' +
        '```\n' +
        'scoop bucket add extras\n' +
        '```\n' +
        '\n' +
        '## Other application buckets\n' +
        '\n' +
        'Many other application buckets hosted on Github can be found in the [Scoop Directory](https://github.com/rasa/scoop-directory).'
    },
    {
      id: 3,
      content: '# Scoop JetBrains bucket [![Build status](https://img.shields.io/appveyor/ci/Ash258/scoop-Jetbrains/master.svg?style=popout&logo=appveyor&label=AppVeyor)](https://ci.appveyor.com/project/Ash258/scoop-jetbrains)\n' +
        '\n' +
        '`scoop bucket add JetBrains`\n' +
        '\n' +
        '❗❗ [For the most optimized scoop experience use "shovel" implementation](https://github.com/Ash258/Scoop-Core) ❗❗\n' +
        '\n' +
        'Each IDE have all available releases. Pre-release versions do not contains bin property (stable release binaries will not be overriden)\n' +
        '\n' +
        '## Portable suffix\n' +
        '\n' +
        '- All created files, which are generated (config, system, plugins, log) are moved into each application root `profile` folder\n' +
        '- Nothing will be saved into system path\n' +
        '\n' +
        '| Application             |                            Stable                            |                              RC                              |                             EAP                              |\n' +
        '| :---------------------- | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |\n' +
        '| CLion                   |  [✔](./bucket/CLion.json) [✔](./bucket/CLion-portable.json)  | [✔](./bucket/CLion-RC.json) [✔](./bucket/CLion-RC-portable.json) | [✔](./bucket/CLion-EAP.json) [✔](./bucket/CLion-EAP-portable.json) |\n' +
        '| DataGrip                | [✔](./bucket/DataGrip.json) [✔](./bucket/DataGrip-portable.json) | [✔](./bucket/DataGrip-RC.json) [✔](./bucket/DataGrip-RC-portable.json) | [✔](./bucket/DataGrip-EAP.json) [✔](./bucket/DataGrip-EAP-portable.json) |\n' +
        '| DotCoverCLT             |                [✔](./bucket/DotCoverCLT.json)                |                              ❌                               |              [✔](./bucket/DotCoverCLT-EAP.json)              |\n' +
        '| DotMemory               |                 [✔](./bucket/DotMemory.json)                 |                              ❌                               |                              ❌                               |\n' +
        '| DotMemoryCLT            |               [✔](./bucket/DotMemoryCLT.json)                |                              ❌                               |             [✔](./bucket/DotMemoryCLT-EAP.json)              |\n' +
        '| DotMemoryUnit           |               [✔](./bucket/DotMemoryUnit.json)               | [❌](https://data.services.jetbrains.com/products/releases?code=DMU&latest=true&platform=zip&type=rc) | [❌](https://data.services.jetbrains.com/products/releases?code=DMU&latest=true&platform=zip&type=eap) |\n' +
        '| DotPeek                 |                  [✔](./bucket/DotPeek.json)                  |                              ❌                               |                              ❌                               |\n' +
        '| DotTrace                |                 [✔](./bucket/DotTrace.json)                  |                              ❌                               |                              ❌                               |\n' +
        '| DotTraceCLT             |                [✔](./bucket/DotTraceCLT.json)                |                              ❌                               |             [✔](./bucket/DotMemoryCLT-EAP.json)              |\n' +
        '| DotTraceSDK             |                [✔](./bucket/DotTraceSDK.json)                |                              ❌                               |                              ❌                               |\n' +
        '| GoLand                  | [✔](./bucket/GoLand.json) [✔](./bucket/GoLand-portable.json) | [✔](./bucket/GoLand-RC.json) [✔](./bucket/GoLand-RC-portable.json) | [✔](./bucket/GoLand-EAP.json) [✔](./bucket/GoLand-EAP-portable.json) |\n' +
        '| IntelliJ-IDEA           | [✔](./bucket/IntelliJ-IDEA.json) [✔](./bucket/IntelliJ-IDEA-portable.json) | [✔](./bucket/IntelliJ-IDEA-RC.json) [✔](./bucket/IntelliJ-IDEA-RC-portable.json) | [✔](./bucket/IntelliJ-IDEA-EAP.json) [✔](./bucket/IntelliJ-IDEA-EAP-portable.json) |\n' +
        '| IntelliJ-IDEA-Education | [✔](./bucket/IntelliJ-IDEA-Education.json) [✔](./bucket/IntelliJ-IDEA-Education-portable.json) | [❌](https://data.services.jetbrains.com/products/releases?code=IIE&latest=true&platform=zip&type=rc) ❌ | [✔](./bucket/IntelliJ-IDEA-Education-EAP.json) [✔](./bucket/IntelliJ-IDEA-Education-EAP-portable.json) |\n' +
        '| IntelliJ-IDEA-Ultimate  | [✔](./bucket/IntelliJ-IDEA-Ultimate.json) [✔](./bucket/IntelliJ-IDEA-Ultimate-portable.json) | [✔](./bucket/IntelliJ-IDEA-Ultimate-RC.json) [✔](./bucket/IntelliJ-IDEA-Ultimate-RC-portable.json) | [✔](./bucket/IntelliJ-IDEA-Ultimate-EAP.json) [✔](./bucket/IntelliJ-IDEA-Ultimate-EAP-portable.json) |\n' +
        '| JBHub                   |                   [✔](./bucket/JBHub.json)                   |                              ❌                               |                              ❌                               |\n' +
        '| FloatingLicenseServer   |           [✔](./bucket/FloatingLicenseServer.json)           |                              ❌                               |                              ❌                               |\n' +
        '| MPS                     |    [✔](./bucket/MPS.json) [✔](./bucket/MPS-portable.json)    | [✔](./bucket/MPS-RC.json) [✔](./bucket/MPS-RC-portable.json) | [✔](./bucket/MPS-EAP.json) [✔](./bucket/MPS-EAP-portable.json) |\n' +
        '| PhpStorm                | [✔](./bucket/PhpStorm.json) [✔](./bucket/PhpStorm-portable.json) | [✔](./bucket/PhpStorm-RC.json) [✔](./bucket/PhpStorm-RC-portable.json) | [✔](./bucket/PhpStorm-EAP.json) [✔](./bucket/PhpStorm-EAP-portable.json) |\n' +
        '| PyCharm                 | [✔](./bucket/PyCharm.json) [✔](./bucket/PyCharm-portable.json) | [✔](./bucket/PyCharm-RC.json) [✔](./bucket/PyCharm-RC-portable.json) | [✔](./bucket/PyCharm-EAP.json) [✔](./bucket/PyCharm-EAP-portable.json) |\n' +
        '| PyCharm-Professional    | [✔](./bucket/PyCharm-Professional.json) [✔](./bucket/PyCharm-Professional-portable.json) | [✔](./bucket/PyCharm-Professional-RC.json) [✔](./bucket/PyCharm-Professional-RC-portable.json) | [✔](./bucket/PyCharm-Professional-EAP.json) [✔](./bucket/PyCharm-Professional-EAP-portable.json) |\n' +
        '| Rider                   |  [✔](./bucket/Rider.json) [✔](./bucket/Rider-portable.json)  | [❌](https://data.services.jetbrains.com/products/releases?code=RD&latest=true&platform=zip&type=rc) ❌ | [✔](./bucket/Rider-EAP.json) [✔](./bucket/Rider-EAP-portable.json) |\n' +
        '| RubyMine                | [✔](./bucket/RubyMine.json) [✔](./bucket/RubyMine-portable.json) | [✔](./bucket/RubyMine-RC.json) [✔](./bucket/RubyMine-RC-portable.json) | [✔](./bucket/RubyMine-EAP.json) [✔](./bucket/RubyMine-EAP-portable.json) |\n' +
        '| TeamCity                |                 [✔](./bucket/TeamCity.json)                  |                [✔](./bucket/TeamCity-RC.json)                |               [✔](./bucket/TeamCity-EAP.json)                |\n' +
        '| JetBrains-Toolbox       |                          in extras                           |           [✔](./bucket/JetBrains-Toolbox-RC.json)            |                              ❌                               |\n' +
        '| Upsource                |                 [✔](./bucket/Upsource.json)                  |                              ❌                               |                              ❌                               |\n' +
        '| WebStorm                | [✔](./bucket/WebStorm.json) [✔](./bucket/WebStorm-portable.json) | [❌](https://data.services.jetbrains.com/products/releases?code=WS&latest=true&platform=zip&type=rc) ❌ | [✔](./bucket/WebStorm-EAP.json) [✔](./bucket/WebStorm-EAP-portable.json) |\n' +
        '| YouTrack                |                 [✔](./bucket/YouTrack.json)                  |                              ❌                               |                              ❌                               |'
    },
    {
      id: 4,
      content: '# PAT乙级：**1014** 福尔摩斯的约会 (20分)\n' +
        '\n' +
        '## 题干\n' +
        '\n' +
        '大侦探福尔摩斯接到一张奇怪的字条：`我们约会吧！ 3485djDkxh4hhGE 2984akDfkkkkggEdsb s&hgsfdk d&Hyscvnm`。大侦探很快就明白了，字条上奇怪的乱码实际上就是约会的时间`星期四 14:04`，因为前面两字符串中第 1 对相同的大写英文字母（大小写有区分）是第 4 个字母 `D`，代表星期四；第 2 对相同的字符是 `E` ，那是第 5 个英文字母，代表一天里的第 14 个钟头（于是一天的 0 点到 23 点由数字 0 到 9、以及大写字母 `A` 到 `N` 表示）；后面两字符串第 1 对相同的英文字母 `s` 出现在第 4 个位置（从 0 开始计数）上，代表第 4 分钟。现给定两对字符串，请帮助福尔摩斯解码得到约会的时间。\n' +
        '\n' +
        '### 输入格式：\n' +
        '\n' +
        '输入在 4 行中分别给出 4 个非空、不包含空格、且长度不超过 60 的字符串。\n' +
        '\n' +
        '### 输出格式：\n' +
        '\n' +
        '在一行中输出约会的时间，格式为 `DAY HH:MM`，其中 `DAY` 是某星期的 3 字符缩写，即 `MON` 表示星期一，`TUE` 表示星期二，`WED` 表示星期三，`THU` 表示星期四，`FRI` 表示星期五，`SAT` 表示星期六，`SUN` 表示星期日。题目输入保证每个测试存在唯一解。\n' +
        '\n' +
        '### 输入样例：\n' +
        '\n' +
        '```in\n' +
        '3485djDkxh4hhGE \n' +
        '2984akDfkkkkggEdsb \n' +
        's&hgsfdk \n' +
        'd&Hyscvnm\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例：\n' +
        '\n' +
        '```out\n' +
        'THU 14:04\n' +
        '```\n' +
        '\n' +
        '## 思路\n' +
        '\n' +
        '* 用`map`存`day`数据。\n' +
        '* 按题意对应检测是否出现相同字符\n' +
        '* 按要求处理输出\n' +
        '* 记得小时和秒要补0\n' +
        '* 可以用`cctype`判断是否为数字\n' +
        '* 用`map`可以不用判断是不是在范围里，只需要确定里面有没有键即可\n' +
        '\n' +
        '## code\n' +
        '\n' +
        '```c++\n' +
        '#include<iostream>\n' +
        '#include<unordered_map>\n' +
        '#include<string>\n' +
        '#include<cctype>\n' +
        'using namespace std;\n' +
        'int main(){\n' +
        '\tunordered_map<char,string> day;\n' +
        '\tday[\'A\']="MON";day[\'B\']="TUE";day[\'C\']="WED";day[\'D\']="THU";\n' +
        '\tday[\'E\']="FRI";day[\'F\']="SAT";day[\'G\']="SUN";\n' +
        '\tunordered_map<char,int> hour;\n' +
        '\tchar c=\'0\';\n' +
        '\tfor(int i=0;i<10;i++) hour[c++]=i;\n' +
        '\tc=\'A\';\n' +
        '\tfor(int i=10;i<24;i++) hour[c++]=i;\n' +
        '\tstring temp1,temp2,temp3,temp4;\n' +
        '\tcin>>temp1>>temp2>>temp3>>temp4;\n' +
        '\tauto it1=temp1.begin(),it2=temp2.begin();\n' +
        '\tfor(;it1!=temp1.end()&&it2!=temp2.end();it1++,it2++){\n' +
        '\t\tif(*it1==*it2){\n' +
        '\t\t\tif(day.count(*it1)==1){\n' +
        '\t\t\t\tcout<<day[*it1]<<" ";\n' +
        '\t\t\t\tit1++,it2++;\n' +
        '\t\t\t\tbreak;\n' +
        '\t\t\t}\n' +
        '\t\t}\n' +
        '\t}\n' +
        '\tfor(;it1!=temp1.end()&&it2!=temp2.end();it1++,it2++){\n' +
        '\t\tif(*it1==*it2){\n' +
        '\t\t\tif(hour.count(*it1)==1){\n' +
        '\t\t\t\tprintf("%02d:",hour[*it1]);\n' +
        '\t\t\t\tbreak;\n' +
        '\t\t\t}\n' +
        '\t\t}\n' +
        '\t}\n' +
        '\tit1=temp3.begin(),it2=temp4.begin();\n' +
        '\tfor(int cnt=0;it1!=temp3.end()&&it2!=temp4.end();it1++,it2++,cnt++){\n' +
        '\t\tif(*it1==*it2&&isalpha(*it1)){\n' +
        '\t\t\tprintf("%02d",cnt);\n' +
        '\t\t\tbreak;\n' +
        '\t\t}\n' +
        '\t}\n' +
        '\treturn 0;\n' +
        '}\n' +
        '```\n' +
        '\n' +
        '## 结果\n' +
        '\n' +
        '| 提交时间          | 状态     | 分数 | 题目                                                         | 编译器    | 耗时 | 用户  |\n' +
        '| ----------------- | -------- | ---- | ------------------------------------------------------------ | --------- | ---- | ----- |\n' +
        '| 2020/4/2 13:19:49 | 答案正确 | 20   | [1014](https://pintia.cn/problem-sets/994805260223102976/problems/994805308755394560) | C++ (g++) | 4 ms | a man |\n' +
        '\n' +
        '| 测试点 | 结果     | 耗时 | 内存   |\n' +
        '| ------ | -------- | ---- | ------ |\n' +
        '| 0      | 答案正确 | 4 ms | 492 KB |\n' +
        '| 1      | 答案正确 | 3 ms | 352 KB |\n' +
        '| 2      | 答案正确 | 3 ms | 424 KB |\n' +
        '| 3      | 答案正确 | 3 ms | 384 KB |\n' +
        '| 4      | 答案正确 | 4 ms | 384 KB |\n' +
        '| 5      | 答案正确 | 4 ms | 512 KB |'
    },
    {
      id: 5,
      content: '# PAT乙级：**1053** **住房空置率** **(20分)**\n' +
        '\n' +
        '## 题干\n' +
        '\n' +
        '在不打扰居民的前提下，统计住房空置率的一种方法是根据每户用电量的连续变化规律进行判断。判断方法如下：\n' +
        '\n' +
        '- 在观察期内，若存在超过一半的日子用电量低于某给定的阈值 *e*，则该住房为“可能空置”；\n' +
        '- 若观察期超过某给定阈值 *D* 天，且满足上一个条件，则该住房为“空置”。\n' +
        '\n' +
        '现给定某居民区的住户用电量数据，请你统计“可能空置”的比率和“空置”比率，即以上两种状态的住房占居民区住房总套数的百分比。\n' +
        '\n' +
        '### 输入格式：\n' +
        '\n' +
        '输入第一行给出正整数 *N*（≤1000），为居民区住房总套数；正实数 *e*，即低电量阈值；正整数 *D*，即观察期阈值。随后 *N* 行，每行按以下格式给出一套住房的用电量数据：\n' +
        '\n' +
        '*K* *E*1 *E*2 ... *E**K*\n' +
        '\n' +
        '其中 *K* 为观察的天数，*E**i* 为第 *i* 天的用电量。\n' +
        '\n' +
        '### 输出格式：\n' +
        '\n' +
        '在一行中输出“可能空置”的比率和“空置”比率的百分比值，其间以一个空格分隔，保留小数点后 1 位。\n' +
        '\n' +
        '### 输入样例：\n' +
        '\n' +
        '```in\n' +
        '5 0.5 10\n' +
        '6 0.3 0.4 0.5 0.2 0.8 0.6\n' +
        '10 0.0 0.1 0.2 0.3 0.0 0.8 0.6 0.7 0.0 0.5\n' +
        '5 0.4 0.3 0.5 0.1 0.7\n' +
        '11 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1\n' +
        '11 2 2 2 1 1 0.1 1 0.1 0.1 0.1 0.1\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例：\n' +
        '\n' +
        '```out\n' +
        '40.0% 20.0%\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '（样例解释：第2、3户为“可能空置”，第4户为“空置”，其他户不是空置。）\n' +
        '\n' +
        '## 思路\n' +
        '\n' +
        '无需建立数组，只需统计有多少个数据超过阈值。\n' +
        '\n' +
        '然后按照题意统计超过阈值的数量。\n' +
        '\n' +
        '由于天数存在单数双数，需要特别地处理一下数据。\n' +
        '\n' +
        '## code\n' +
        '\n' +
        '```c++\n' +
        '#include<iostream>\n' +
        'using namespace std;\n' +
        'int main(){\n' +
        '\tint house=0,k_day=0;\n' +
        '\tint cnt_p=0,cnt_s=0;\n' +
        '\tdouble k_elc=0;\n' +
        '\tcin>>house>>k_elc>>k_day;\n' +
        '\tfor(int i=0;i<house;i++){\n' +
        '\t\tint temp_day=0,cnt=0;\n' +
        '\t\tcin>>temp_day;\n' +
        '\t\tfor(int j=0;j<temp_day;j++){\n' +
        '\t\t\tdouble elc=0;\n' +
        '\t\t\tcin>>elc;\n' +
        '\t\t\tif(elc<k_elc) cnt++;\n' +
        '\t\t}\n' +
        '\t\tif(temp_day<=k_day){\n' +
        '\t\t\tif(temp_day%2==0) temp_day++;\n' +
        '\t\t\tif(cnt>=temp_day/2+temp_day%2) cnt_p++;\n' +
        '\t\t}else{\n' +
        '\t\t\tif(temp_day%2==0) temp_day++;\n' +
        '\t\t\tif(cnt>=temp_day/2+temp_day%2) cnt_s++;\n' +
        '\t\t}\n' +
        '\t}\n' +
        '\tprintf("%.1f%% %.1f%%",100.0*cnt_p/house,100.0*cnt_s/house);\n' +
        '\treturn 0;\n' +
        '} \n' +
        '```\n' +
        '\n' +
        '## 结果\n' +
        '\n' +
        '| 提交时间          | 状态     | 分数 | 题目                                                         | 编译器    | 耗时   | 用户  |\n' +
        '| ----------------- | -------- | ---- | ------------------------------------------------------------ | --------- | ------ | ----- |\n' +
        '| 2020/4/4 13:01:30 | 答案正确 | 20   | [1053](https://pintia.cn/problem-sets/994805260223102976/problems/994805273284165632) | C++ (g++) | 116 ms | a man |\n' +
        '\n' +
        '| 测试点 | 结果     | 耗时   | 内存   |\n' +
        '| ------ | -------- | ------ | ------ |\n' +
        '| 0      | 答案正确 | 3 ms   | 504 KB |\n' +
        '| 1      | 答案正确 | 3 ms   | 424 KB |\n' +
        '| 2      | 答案正确 | 116 ms | 364 KB |\n' +
        '| 3      | 答案正确 | 4 ms   | 384 KB |\n' +
        '| 4      | 答案正确 | 5 ms   | 384 KB |\n' +
        '| 5      | 答案正确 | 4 ms   | 424 KB |'
    },
    {
      id: 6,
      content: '# PAT乙级：**1056** **组合数的和** **(15分)**\n' +
        '\n' +
        '给定 N 个非 0 的个位数字，用其中任意 2 个数字都可以组合成 1 个 2 位的数字。要求所有可能组合出来的 2 位数字的和。例如给定 2、5、8，则可以组合出：25、28、52、58、82、85，它们的和为330。\n' +
        '\n' +
        '### 输入格式：\n' +
        '\n' +
        '输入在一行中先给出 N（1 < N < 10），随后给出 N 个不同的非 0 个位数字。数字间以空格分隔。\n' +
        '\n' +
        '### 输出格式：\n' +
        '\n' +
        '输出所有可能组合出来的2位数字的和。\n' +
        '\n' +
        '### 输入样例：\n' +
        '\n' +
        '```in\n' +
        '3 2 8 5\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例：\n' +
        '\n' +
        '```out\n' +
        '330\n' +
        '```\n' +
        '\n' +
        '## 思路\n' +
        '\n' +
        '全排列历遍一次，加起来。注意由于是两位数，只需要找出一半的组合，就能累加得到总和。\n' +
        '\n' +
        '## code\n' +
        '\n' +
        '```c++\n' +
        '#include<vector>\n' +
        '#include<iostream>\n' +
        'using namespace std;\n' +
        'int main(){\n' +
        '\tint temp=0,ans=0,n=0;\n' +
        '\tvector<int> array;\n' +
        '\tcin>>n;\n' +
        '\twhile(n--){\n' +
        '\t\tcin>>temp;\n' +
        '\t\tarray.push_back(temp);\n' +
        '\t}\n' +
        '\tfor(int i=0;i<array.size();i++){\n' +
        '\t\tfor(int j=i+1;j<array.size();j++){\n' +
        '\t\t\tans+=array[i]*10+array[j];\n' +
        '\t\t\tans+=array[j]*10+array[i];\n' +
        '\t\t}\n' +
        '\t}\n' +
        '\tcout<<ans;\n' +
        '\treturn 0;\n' +
        '}\n' +
        '```\n' +
        '\n'
    },
    {
      id: 7,
      content: '# PAT乙级：**1057** **数零壹** (20分)\n' +
        '\n' +
        '## 题干\n' +
        '\n' +
        '给定一串长度不超过 105 的字符串，本题要求你将其中所有英文字母的序号（字母 a-z 对应序号 1-26，不分大小写）相加，得到整数 N，然后再分析一下 N 的二进制表示中有多少 0、多少 1。例如给定字符串 `PAT (Basic)`，其字母序号之和为：16+1+20+2+1+19+9+3=71，而 71 的二进制是 1000111，即有 3 个 0、4 个 1。\n' +
        '\n' +
        '### 输入格式：\n' +
        '\n' +
        '输入在一行中给出长度不超过 105、以回车结束的字符串。\n' +
        '\n' +
        '### 输出格式：\n' +
        '\n' +
        '在一行中先后输出 0 的个数和 1 的个数，其间以空格分隔。\n' +
        '\n' +
        '### 输入样例：\n' +
        '\n' +
        '```in\n' +
        'PAT (Basic)\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例：\n' +
        '\n' +
        '```out\n' +
        '3 4\n' +
        '```\n' +
        '\n' +
        '## 思路\n' +
        '\n' +
        '主要是记录有用的库函数。\n' +
        '\n' +
        '* `tolower`函数：将字母变成小写\n' +
        '* `getline(cin,str)`函数，读一整行到`str`里。\n' +
        '\n' +
        '思路其实很简单的，记录完，计算余数即可。\n' +
        '\n' +
        '## code\n' +
        '\n' +
        '```c++\n' +
        '#include<iostream>\n' +
        '#include<string>\n' +
        '#include<cctype>\n' +
        'using namespace std;\n' +
        'int main(){\n' +
        '\tstring temp;\n' +
        '\tgetline(cin,temp);\n' +
        '\tint cnt=0,cnt_1=0,cnt_0=0;\n' +
        '\tfor(auto it=temp.begin();it!=temp.end();it++){\n' +
        '\t\tif(isalpha(*it)){\n' +
        '\t\t\t*it=tolower(*it);\n' +
        '\t\t\tcnt+=*it-\'a\'+1;\n' +
        '\t\t}\n' +
        '\t}\n' +
        '\twhile(cnt){\n' +
        '\t\tif(cnt%2) cnt_1++;\n' +
        '\t\telse cnt_0++;\n' +
        '\t\tcnt/=2;\n' +
        '\t}\n' +
        '\tprintf("%d %d",cnt_0,cnt_1);\n' +
        '\treturn 0;\n' +
        '}\n' +
        '```\n' +
        '\n' +
        '## 结果\n' +
        '\n' +
        '| 提交时间          | 状态     | 分数 | 题目                                                         | 编译器    | 耗时  | 用户  |\n' +
        '| ----------------- | -------- | ---- | ------------------------------------------------------------ | --------- | ----- | ----- |\n' +
        '| 2020/4/4 12:54:31 | 答案正确 | 20   | [1057](https://pintia.cn/problem-sets/994805260223102976/problems/994805270914383872) | C++ (g++) | 10 ms | a man |\n' +
        '\n' +
        '| 测试点 | 结果     | 耗时  | 内存   |\n' +
        '| ------ | -------- | ----- | ------ |\n' +
        '| 0      | 答案正确 | 5 ms  | 424 KB |\n' +
        '| 1      | 答案正确 | 5 ms  | 364 KB |\n' +
        '| 2      | 答案正确 | 10 ms | 516 KB |\n' +
        '| 3      | 答案正确 | 10 ms | 512 KB |\n' +
        '| 4      | 答案正确 | 4 ms  | 424 KB |'
    },
    {
      id: 8,
      content: '# PAT乙级：**1061** **判断题** **(15**分)\n' +
        '\n' +
        '## 题干\n' +
        '\n' +
        '判断题的评判很简单，本题就要求你写个简单的程序帮助老师判题并统计学生们判断题的得分。\n' +
        '\n' +
        '### 输入格式：\n' +
        '\n' +
        '输入在第一行给出两个不超过 100 的正整数 N 和 M，分别是学生人数和判断题数量。第二行给出 M 个不超过 5 的正整数，是每道题的满分值。第三行给出每道题对应的正确答案，0 代表“非”，1 代表“是”。随后 N 行，每行给出一个学生的解答。数字间均以空格分隔。\n' +
        '\n' +
        '### 输出格式：\n' +
        '\n' +
        '按照输入的顺序输出每个学生的得分，每个分数占一行。\n' +
        '\n' +
        '### 输入样例：\n' +
        '\n' +
        '```in\n' +
        '3 6\n' +
        '2 1 3 3 4 5\n' +
        '0 0 1 0 1 1\n' +
        '0 1 1 0 0 1\n' +
        '1 0 1 0 1 0\n' +
        '1 1 0 0 1 1\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例：\n' +
        '\n' +
        '```out\n' +
        '13\n' +
        '11\n' +
        '12\n' +
        '```\n' +
        '\n' +
        '## 直接上代码\n' +
        '\n' +
        '```c++\n' +
        '#include<iostream>\n' +
        '#include<vector>\n' +
        'using namespace std;\n' +
        'int main(){\n' +
        '\tint peo_n=0,pro_n=0,temp=0;\n' +
        '\tcin>>peo_n>>pro_n;\n' +
        '\tvector<int> sce(pro_n),jud(pro_n);\n' +
        '\tfor(int i=0;i<pro_n;i++){\n' +
        '\t\tcin>>sce[i];\n' +
        '\t}\n' +
        '\tfor(int i=0;i<pro_n;i++){\n' +
        '\t\tcin>>jud[i];\n' +
        '\t}\n' +
        '\tfor(int i=0;i<peo_n;i++){\n' +
        '\t\tint total=0;\n' +
        '\t\tfor(int j=0;j<pro_n;j++){\n' +
        '\t\t\tcin>>temp;\n' +
        '\t\t\tif(jud[j]==temp) total+=sce[j];\n' +
        '\t\t}\n' +
        '\t\tcout<<total<<endl;\n' +
        '\t}\n' +
        '\treturn 0;\n' +
        '}\n' +
        '```\n' +
        '\n'
    },
    {
      id: 9,
      content: '# PAT乙级：**1063** **计算谱半径** **(20分)**\n' +
        '\n' +
        '## 题干\n' +
        '\n' +
        '在数学中，矩阵的“谱半径”是指其特征值的模集合的上确界。换言之，对于给定的 *n* 个复数空间的特征值 { *a*1+*b*1*i*,⋯,*a**n*+*b**n**i* }，它们的模为实部与虚部的平方和的开方，而“谱半径”就是最大模。\n' +
        '\n' +
        '现在给定一些复数空间的特征值，请你计算并输出这些特征值的谱半径。\n' +
        '\n' +
        '### 输入格式：\n' +
        '\n' +
        '输入第一行给出正整数 N（≤ 10 000）是输入的特征值的个数。随后 N 行，每行给出 1 个特征值的实部和虚部，其间以空格分隔。注意：题目保证实部和虚部均为绝对值不超过 1000 的整数。\n' +
        '\n' +
        '### 输出格式：\n' +
        '\n' +
        '在一行中输出谱半径，四舍五入保留小数点后 2 位。\n' +
        '\n' +
        '### 输入样例：\n' +
        '\n' +
        '```in\n' +
        '5\n' +
        '0 1\n' +
        '2 0\n' +
        '-1 0\n' +
        '3 3\n' +
        '0 -3\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例：\n' +
        '\n' +
        '```out\n' +
        '4.24\n' +
        '```\n' +
        '\n' +
        '## 思路\n' +
        '\n' +
        '录入，直接求，找最大值就可以。c++的浮点数会自动四舍五入不用担心。\n' +
        '\n' +
        '## code\n' +
        '\n' +
        '```c++\n' +
        '#include<iostream>\n' +
        '#include<math.h>\n' +
        '#include<algorithm>\n' +
        'using namespace std;\n' +
        'int main(){\n' +
        '\tint n=0,a=0,b=0;\n' +
        '\tfloat max_ans=0,temp=0;\n' +
        '\tcin>>n;\n' +
        '\tfor(int i=0;i<n;i++){\n' +
        '\t\tcin>>a>>b;\n' +
        '\t\ttemp=sqrt(pow(a,2)+pow(b,2));\n' +
        '\t\tmax_ans=max(max_ans,temp);\n' +
        '\t}\n' +
        '\t//max_ans+=0.005;\n' +
        '\tprintf("%.2f",max_ans);\n' +
        '\treturn 0;\n' +
        '}\n' +
        '```\n' +
        '\n'
    },
    {
      id: 10,
      content: '# PAT乙级：**1064** **朋友数** **(20分)**\n' +
        '\n' +
        '## 题干\n' +
        '\n' +
        '如果两个整数各位数字的和是一样的，则被称为是“朋友数”，而那个公共的和就是它们的“朋友证号”。例如 123 和 51 就是朋友数，因为 1+2+3 = 5+1 = 6，而 6 就是它们的朋友证号。给定一些整数，要求你统计一下它们中有多少个不同的朋友证号。\n' +
        '\n' +
        '### 输入格式：\n' +
        '\n' +
        '输入第一行给出正整数 N。随后一行给出 N 个正整数，数字间以空格分隔。题目保证所有数字小于 104。\n' +
        '\n' +
        '### 输出格式：\n' +
        '\n' +
        '首先第一行输出给定数字中不同的朋友证号的个数；随后一行按递增顺序输出这些朋友证号，数字间隔一个空格，且行末不得有多余空格。\n' +
        '\n' +
        '### 输入样例：\n' +
        '\n' +
        '```in\n' +
        '8\n' +
        '123 899 51 998 27 33 36 12\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例：\n' +
        '\n' +
        '```out\n' +
        '4\n' +
        '3 6 9 26\n' +
        '```\n' +
        '\n' +
        '## 思路\n' +
        '\n' +
        '用`string`接收数据，再将每一个`char`的大小加起来，加进`set`里。\n' +
        '\n' +
        '`set`内部自动去重且排序，直接就能搞定题目要求。\n' +
        '\n' +
        '## code\n' +
        '\n' +
        '```c++\n' +
        '#include<iostream>\n' +
        '#include<set>\n' +
        '#include<string>\n' +
        'using namespace std;\n' +
        'int main(){\n' +
        '\tint n=0;\n' +
        '\tstring temp;\n' +
        '\tset<int> ans;\n' +
        '\tcin>>n;\n' +
        '\tfor(int i=0;i<n;i++){\n' +
        '\t\tint cnt=0;\n' +
        '\t\tcin>>temp;\n' +
        '\t\tfor(auto it=temp.begin();it!=temp.end();it++){\n' +
        '\t\t\tchar c=*it;\n' +
        '\t\t\tcnt+=c-\'0\';\n' +
        '\t\t}\n' +
        '\t\tans.insert(cnt);\n' +
        '\t}\n' +
        '\tcout<<ans.size()<<endl;\n' +
        '\tint cnt=1;\n' +
        '\tfor(auto it=ans.begin();it!=ans.end();it++,cnt++){\n' +
        '\t\tif(cnt!=ans.size()) cout<<*it<<" ";\n' +
        '\t\telse cout<<*it<<endl;\n' +
        '\t}\n' +
        '\treturn 0;\n' +
        '}\n' +
        '```\n' +
        '\n' +
        '\n' +
        '\n'
    },
    {
      id: 11,
      content: '# PAT乙级：**1069** **微博转发抽奖** (20分)\n' +
        '\n' +
        '## 题干\n' +
        '\n' +
        '小明 PAT 考了满分，高兴之余决定发起微博转发抽奖活动，从转发的网友中按顺序每隔 N 个人就发出一个红包。请你编写程序帮助他确定中奖名单。\n' +
        '\n' +
        '### 输入格式：\n' +
        '\n' +
        '输入第一行给出三个正整数 M（≤ 1000）、N 和 S，分别是转发的总量、小明决定的中奖间隔、以及第一位中奖者的序号（编号从 1 开始）。随后 M 行，顺序给出转发微博的网友的昵称（不超过 20 个字符、不包含空格回车的非空字符串）。\n' +
        '\n' +
        '注意：可能有人转发多次，但不能中奖多次。所以如果处于当前中奖位置的网友已经中过奖，则跳过他顺次取下一位。\n' +
        '\n' +
        '### 输出格式：\n' +
        '\n' +
        '按照输入的顺序输出中奖名单，每个昵称占一行。如果没有人中奖，则输出 `Keep going...`。\n' +
        '\n' +
        '### 输入样例 1：\n' +
        '\n' +
        '```in\n' +
        '9 3 2\n' +
        'Imgonnawin!\n' +
        'PickMe\n' +
        'PickMeMeMeee\n' +
        'LookHere\n' +
        'Imgonnawin!\n' +
        'TryAgainAgain\n' +
        'TryAgainAgain\n' +
        'Imgonnawin!\n' +
        'TryAgainAgain\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例 1：\n' +
        '\n' +
        '```out\n' +
        'PickMe\n' +
        'Imgonnawin!\n' +
        'TryAgainAgain\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输入样例 2：\n' +
        '\n' +
        '```in\n' +
        '2 3 5\n' +
        'Imgonnawin!\n' +
        'PickMe\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例 2：\n' +
        '\n' +
        '```out\n' +
        'Keep going...\n' +
        '```\n' +
        '\n' +
        '## 思路\n' +
        '\n' +
        '按题意模拟过程。用``map`记录中奖情况，凡是中奖就一直往下循环直到找到没有中过将的。\n' +
        '\n' +
        '## code\n' +
        '\n' +
        '```c++\n' +
        '#include<iostream>\n' +
        '#include<vector>\n' +
        '#include<unordered_map>\n' +
        '#include<string>\n' +
        'using namespace std;\n' +
        'int main() {\n' +
        '\tint m=0,n=0,s=0;\n' +
        '\tcin>>m>>n>>s;\n' +
        '\tunordered_map<string,bool> dic;\n' +
        '\tvector<string> list(m);\n' +
        '\tfor(int i=0;i<m;i++) cin>>list[i];\n' +
        '\tif(s>m){\n' +
        '\t\tcout<<"Keep going..."<<endl;\n' +
        '\t\treturn 0;\t\n' +
        '\t}\n' +
        '\tvector<string> ans;\n' +
        '\tfor(int i=s-1;i<m;i+=n){\n' +
        '\t\tif(dic[list[i]]==false){\n' +
        '\t\t\tdic[list[i]]=true;\n' +
        '\t\t\tans.push_back(list[i]);\n' +
        '\t\t}else{\n' +
        '\t\t\tfor(;i<m;i++){\n' +
        '\t\t\t\tif(dic[list[i]]==false){\n' +
        '\t\t\t\t\tdic[list[i]]=true;\n' +
        '\t\t\t\t\tans.push_back(list[i]);\n' +
        '\t\t\t\t\tbreak;\n' +
        '\t\t\t\t}\n' +
        '\t\t\t}\n' +
        '\t\t}\n' +
        '\t}\n' +
        '\tfor(string name:ans){\n' +
        '\t\tcout<<name<<endl;\n' +
        '\t}\n' +
        '\treturn 0;\n' +
        '}\n' +
        '```\n' +
        '\n' +
        '## 结果\n' +
        '\n' +
        '| 提交时间          | 状态     | 分数 | 题目                                                         | 编译器    | 耗时 | 用户  |\n' +
        '| ----------------- | -------- | ---- | ------------------------------------------------------------ | --------- | ---- | ----- |\n' +
        '| 2020/4/3 18:33:37 | 答案正确 | 20   | [1069](https://pintia.cn/problem-sets/994805260223102976/problems/994805265159798784) | C++ (g++) | 7 ms | a man |\n' +
        '\n' +
        '| 测试点 | 结果     | 耗时 | 内存   |\n' +
        '| ------ | -------- | ---- | ------ |\n' +
        '| 0      | 答案正确 | 5 ms | 424 KB |\n' +
        '| 1      | 答案正确 | 4 ms | 356 KB |\n' +
        '| 2      | 答案正确 | 5 ms | 512 KB |\n' +
        '| 3      | 答案正确 | 5 ms | 424 KB |\n' +
        '| 4      | 答案正确 | 7 ms | 640 KB |'
    },
    {
      id: 12,
      content: '# PAT乙级：**1070** **结绳** **(25分)**\n' +
        '\n' +
        '## 题干\n' +
        '\n' +
        '给定一段一段的绳子，你需要把它们串成一条绳。每次串连的时候，是把两段绳子对折，再如下图所示套接在一起。这样得到的绳子又被当成是另一段绳子，可以再次对折去跟另一段绳子串连。每次串连后，原来两段绳子的长度就会减半。\n' +
        '\n' +
        '![image-20200327072825473](https://raw.githubusercontent.com/HYBB-rash/cnBlogs/master/img/20200327074554.png)\n' +
        '\n' +
        '给定 *N* 段绳子的长度，你需要找出它们能串成的绳子的最大长度。\n' +
        '\n' +
        '### 输入格式：\n' +
        '\n' +
        '每个输入包含 1 个测试用例。每个测试用例第 1 行给出正整数 *N* (2≤*N*≤104)；第 2 行给出 *N* 个正整数，即原始绳段的长度，数字间以空格分隔。所有整数都不超过104。\n' +
        '\n' +
        '### 输出格式：\n' +
        '\n' +
        '在一行中输出能够串成的绳子的最大长度。结果向下取整，即取为不超过最大长度的最近整数。\n' +
        '\n' +
        '### 输入样例：\n' +
        '\n' +
        '```in\n' +
        '8\n' +
        '10 15 12 3 4 13 1 15\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例：\n' +
        '\n' +
        '```out\n' +
        '14\n' +
        '```\n' +
        '\n' +
        '## 思路\n' +
        '\n' +
        '​\t这道题我愚蠢地用了二叉堆去做，然后一看柳神的，原来贪心就可以……\n' +
        '\n' +
        '​\t下面给出贪心算法正确的证明：证明最短的两条绳子对半融合后仍然是最小的一段绳子\n' +
        '\n' +
        '1. 前提：绳子有4段以上\n' +
        '\n' +
        '2. 给出前提的理由：绳子端数小于4时，例如3条:$a,b,c$，$ab$融合成$d$，不论$d>c\\space or\\space d<c$,都只剩两条绳子，只能互相结合了。\n' +
        '\n' +
        '3. 不妨假设绳子有四条，分别为$a,b,c,d,\\space a<b<c<d $\n' +
        '   $$\n' +
        '   \\begin{split}\n' +
        '   e=(a+b)/2\\\\\n' +
        '   \\because a<c,b<c\\\\\n' +
        '   \\therefore a<d,b<d\\\\\n' +
        '   \\therefore a+b<2d\\\\\n' +
        '   \\therefore e<d\\\\\n' +
        '   \\because a<c,b<c\\\\\n' +
        '   \\therefore a+b<2c\\\\\n' +
        '   \\therefore e<c\\\\\n' +
        '   \\therefore e<c<d\n' +
        '   \\end{split}\n' +
        '   $$\n' +
        '   可得出结论，最小的两个绳子结合后一定也是最小的一段绳子。证明比较简单。\n' +
        '\n' +
        '## code\n' +
        '\n' +
        '```c++\n' +
        '#include<iostream>\n' +
        '#include<algorithm>\n' +
        '#include<vector>\n' +
        'using namespace std;\n' +
        'bool cmp(int a,int b){\n' +
        '\treturn a>b;\n' +
        '}\n' +
        'int main(){\n' +
        '\tint n=0,temp=0;\n' +
        '\tcin>>n;\n' +
        '\tvector<int> rope(n);\n' +
        '\tfor(int i=0;i<n;i++) cin>>rope[i];\n' +
        '\tsort(rope.begin(),rope.end(),cmp);\n' +
        '\twhile(rope.size()>1){\n' +
        '\t\ttemp=(rope[rope.size()-1]+rope[rope.size()-2])/2;\n' +
        '\t\trope.pop_back(),rope.pop_back();\n' +
        '\t\trope.push_back(temp);\n' +
        '\t}\n' +
        '\tcout<<rope[0]<<endl;\n' +
        '\treturn 0;\n' +
        '}\n' +
        '```\n' +
        '\n'
    },
    {
      id: 13,
      content: '# PAT乙级：**1076** **Wifi密码** **(15分)**\n' +
        '\n' +
        '## 题干\n' +
        '\n' +
        '下面是微博上流传的一张照片：“各位亲爱的同学们，鉴于大家有时需要使用 wifi，又怕耽误亲们的学习，现将 wifi 密码设置为下列数学题答案：A-1；B-2；C-3；D-4；请同学们自己作答，每两日一换。谢谢合作！！~”—— 老师们为了促进学生学习也是拼了…… 本题就要求你写程序把一系列题目的答案按照卷子上给出的对应关系翻译成 wifi 的密码。这里简单假设每道选择题都有 4 个选项，有且只有 1 个正确答案。\n' +
        '\n' +
        '![image-20200326095227156](https://raw.githubusercontent.com/HYBB-rash/cnBlogs/master/img/20200326095229.png)\n' +
        '\n' +
        '### 输入格式：\n' +
        '\n' +
        '输入第一行给出一个正整数 N（≤ 100），随后 N 行，每行按照 `编号-答案` 的格式给出一道题的 4 个选项，`T` 表示正确选项，`F` 表示错误选项。选项间用空格分隔。\n' +
        '\n' +
        '### 输出格式：\n' +
        '\n' +
        '在一行中输出 wifi 密码。\n' +
        '\n' +
        '### 输入样例：\n' +
        '\n' +
        '```in\n' +
        '8\n' +
        'A-T B-F C-F D-F\n' +
        'C-T B-F A-F D-F\n' +
        'A-F D-F C-F B-T\n' +
        'B-T A-F C-F D-F\n' +
        'B-F D-T A-F C-F\n' +
        'A-T C-F B-F D-F\n' +
        'D-T B-F C-F A-F\n' +
        'C-T A-F B-F D-F\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例：\n' +
        '\n' +
        '```out\n' +
        '13224143\n' +
        '```\n' +
        '\n' +
        '## 思路\n' +
        '\n' +
        '好像不需要思路，检测一下再统计就好了，我用的map做的。\n' +
        '\n' +
        '柳婼大神的比较简单……我做复杂了。\n' +
        '\n' +
        '## code\n' +
        '\n' +
        '```c++\n' +
        '#include<iostream>\n' +
        '#include<string>\n' +
        '#include<vector>\n' +
        '#include<unordered_map>\n' +
        'using namespace std;\n' +
        'int main(){\n' +
        '\tunordered_map<string,int> dic;\n' +
        '\tdic["A-T"]=1,dic["B-T"]=2,dic["C-T"]=3,dic["D-T"]=4;\n' +
        '\tint n=0;\n' +
        '\tcin>>n;\n' +
        '\tvector<int> ans(n);\n' +
        '\tstring temp;\n' +
        '\tfor(int i=0;i<n;i++){\n' +
        '\t\tfor(int j=0;j<4;j++){\n' +
        '\t\t\tcin>>temp;\n' +
        '\t\t\tif(dic[temp]) ans[i]=dic[temp];\n' +
        '\t\t}\n' +
        '\t}\n' +
        '\tfor(int i=0;i<n;i++) cout<<ans[i];\n' +
        '\treturn 0;\n' +
        '} \n' +
        '```\n' +
        '\n' +
        '柳婼大神的解法：\n' +
        '\n' +
        '```c++\n' +
        '#include <iostream>\n' +
        'using namespace std;\n' +
        'int main() {\n' +
        '\tstring s;\n' +
        '\twhile (cin >> s)\n' +
        '\tif(s.size() == 3 && s[2] == \'T\') cout << s[0]-\'A\'+1;\n' +
        '\treturn 0;\n' +
        '}\n' +
        '```\n' +
        '\n' +
        '这就是所谓的高下立判么，ilil。'
    },
    {
      id: 14,
      content: '# PAT乙级：**1077** **互评成绩计算** **(20分)**\n' +
        '\n' +
        '在浙大的计算机专业课中，经常有互评分组报告这个环节。一个组上台介绍自己的工作，其他组在台下为其表现评分。最后这个组的互评成绩是这样计算的：所有其他组的评分中，去掉一个最高分和一个最低分，剩下的分数取平均分记为 *G*1；老师给这个组的评分记为 *G*2。该组得分为 (*G*1+*G*2)/2，最后结果四舍五入后保留整数分。本题就要求你写个程序帮助老师计算每个组的互评成绩。\n' +
        '\n' +
        '### 输入格式：\n' +
        '\n' +
        '输入第一行给出两个正整数 *N*（> 3）和 *M*，分别是分组数和满分，均不超过 100。随后 *N* 行，每行给出该组得到的 *N* 个分数（均保证为整型范围内的整数），其中第 1 个是老师给出的评分，后面 *N*−1 个是其他组给的评分。合法的输入应该是 [0,*M*] 区间内的整数，若不在合法区间内，则该分数须被忽略。题目保证老师的评分都是合法的，并且每个组至少会有 3 个来自同学的合法评分。\n' +
        '\n' +
        '### 输出格式：\n' +
        '\n' +
        '为每个组输出其最终得分。每个得分占一行。\n' +
        '\n' +
        '### 输入样例：\n' +
        '\n' +
        '```in\n' +
        '6 50\n' +
        '42 49 49 35 38 41\n' +
        '36 51 50 28 -1 30\n' +
        '40 36 41 33 47 49\n' +
        '30 250 -25 27 45 31\n' +
        '48 0 0 50 50 1234\n' +
        '43 41 36 29 42 29\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例：\n' +
        '\n' +
        '```out\n' +
        '42\n' +
        '33\n' +
        '41\n' +
        '31\n' +
        '37\n' +
        '39\n' +
        '```\n' +
        '\n' +
        '## 思路\n' +
        '\n' +
        '* 使用`vector`和`sort`函数，输入时判定范围，合适的数据才放进数组，然后`sort`之后剪掉开头结尾\n' +
        '* 记得用`float`计算平均数，算完总平均数记得四舍五入，不是直接向下取整~\n' +
        '* 四舍五入的方法是加上0.5然后取`int`~\n' +
        '\n' +
        '## code\n' +
        '\n' +
        '```c++\n' +
        '#include <vector>\n' +
        '#include <algorithm>\n' +
        '#include <iostream>\n' +
        'using namespace std;\n' +
        'int main(){\n' +
        '    int n=0,max_sre=0,memo=0,avg=0;\n' +
        '    cin>>n>>max_sre;\n' +
        '    vector<int> temp;\n' +
        '    for(int i=0;i<n;i++){\n' +
        '    \tint teacher=0;\n' +
        '    \tcin>>teacher;\n' +
        '        for(int j=1;j<n;j++){\n' +
        '            cin>>memo;\n' +
        '            if(memo>=0&&memo<=max_sre)\n' +
        '            temp.push_back(memo);\n' +
        '        }\n' +
        '        sort(temp.begin(),temp.end());\n' +
        '        for(int j=1;j<temp.size()-1;j++){\n' +
        '            avg+=temp[j];\n' +
        '        }\n' +
        '        float tmp=0;\n' +
        '        tmp=1.0*avg/(temp.size()-2);\n' +
        '        avg=(int)((tmp+teacher)/2+0.5);\n' +
        '        cout<<avg<<endl;\n' +
        '        avg=0;\n' +
        '        temp.clear();\n' +
        '    }\n' +
        '    return 0;\n' +
        '}\n' +
        '```\n' +
        '\n'
    },
    {
      id: 15,
      content: '# PAT乙级：**1082** **射击比赛** **(20分)**\n' +
        '\n' +
        '## 题干\n' +
        '\n' +
        '本题目给出的射击比赛的规则非常简单，谁打的弹洞距离靶心最近，谁就是冠军；谁差得最远，谁就是菜鸟。本题给出一系列弹洞的平面坐标(x,y)，请你编写程序找出冠军和菜鸟。我们假设靶心在原点(0,0)。\n' +
        '\n' +
        '### 输入格式：\n' +
        '\n' +
        '输入在第一行中给出一个正整数 N（≤ 10 000）。随后 N 行，每行按下列格式给出：\n' +
        '\n' +
        '```\n' +
        'ID x y\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '其中 `ID` 是运动员的编号（由 4 位数字组成）；`x` 和 `y` 是其打出的弹洞的平面坐标(`x`,`y`)，均为整数，且 0 ≤ |`x`|, |`y`| ≤ 100。题目保证每个运动员的编号不重复，且每人只打 1 枪。\n' +
        '\n' +
        '### 输出格式：\n' +
        '\n' +
        '输出冠军和菜鸟的编号，中间空 1 格。题目保证他们是唯一的。\n' +
        '\n' +
        '### 输入样例：\n' +
        '\n' +
        '```in\n' +
        '3\n' +
        '0001 5 7\n' +
        '1020 -1 3\n' +
        '0233 0 -1\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例：\n' +
        '\n' +
        '```out\n' +
        '0233 0001\n' +
        '```\n' +
        '\n' +
        '## 思路\n' +
        '\n' +
        '很简单，录入数据，比大小。\n' +
        '\n' +
        '记住，pat里的所有编号都要留意，只要提及编号，只要说明了是几位数的编号，一定记得留0.\n' +
        '\n' +
        '## code\n' +
        '\n' +
        '```c++\n' +
        '#include<iostream>\n' +
        '#include<vector>\n' +
        '#include<math.h>\n' +
        'using namespace std;\n' +
        'int main(){\n' +
        '\tint n=0;\n' +
        '\tdouble max_dis=0,min_dis=1000;\n' +
        '\tint max_index=0,min_index=0;\n' +
        '\tcin>>n;\n' +
        '\tdouble temp=0;\n' +
        '\tint index=0,x=0,y=0;\n' +
        '\tfor(int i=0;i<n;i++){\n' +
        '\t\tcin>>index>>x>>y;\n' +
        '\t\ttemp=sqrt(x*x+y*y);\n' +
        '\t\tif(max_dis<temp){\n' +
        '\t\t\tmax_dis=temp;\n' +
        '\t\t\tmin_index=index;\n' +
        '\t\t}\n' +
        '\t\tif(min_dis>temp){\n' +
        '\t\t\tmin_dis=temp;\n' +
        '\t\t\tmax_index=index;\n' +
        '\t\t}\n' +
        '\t}\n' +
        '\tprintf("%04d %04d",max_index,min_index);\n' +
        '\treturn 0;\n' +
        '} \n' +
        '```\n' +
        '\n'
    },
    {
      id: 16,
      content: '# PAT乙级：**1083** **是否存在相等的差 (20分)**\n' +
        '\n' +
        '## 题干\n' +
        '\n' +
        '给定 N 张卡片，正面分别写上 1、2、……、N，然后全部翻面，洗牌，在背面分别写上 1、2、……、N。将每张牌的正反两面数字相减（大减小），得到 N 个非负差值，其中是否存在相等的差？\n' +
        '\n' +
        '### 输入格式：\n' +
        '\n' +
        '输入第一行给出一个正整数 N（2 ≤ N ≤ 10 000），随后一行给出 1 到 N 的一个洗牌后的排列，第 i 个数表示正面写了 i 的那张卡片背面的数字。\n' +
        '\n' +
        '### 输出格式：\n' +
        '\n' +
        '按照“差值 重复次数”的格式从大到小输出重复的差值及其重复的次数，每行输出一个结果。\n' +
        '\n' +
        '### 输入样例：\n' +
        '\n' +
        '```in\n' +
        '8\n' +
        '3 5 8 6 2 1 4 7\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例：\n' +
        '\n' +
        '```out\n' +
        '5 2\n' +
        '3 3\n' +
        '2 2\n' +
        '```\n' +
        '\n' +
        '## 思路\n' +
        '\n' +
        'hash表，记录一下，按降序输出即可。可以用map实现因为自动有序\n' +
        '\n' +
        '## code\n' +
        '\n' +
        '```c++\n' +
        '#include<iostream>\n' +
        '#include<vector>\n' +
        '#include<algorithm>\n' +
        '#include<map>\n' +
        'using namespace std;\n' +
        'int main(){\n' +
        '\tint n=0;\n' +
        '\tcin>>n;\n' +
        '\tvector<int> nums(n);\n' +
        '\tfor(int i=0;i<n;i++) cin>>nums[i];\n' +
        '\tmap<int,int> dic;\n' +
        '\tfor(int i=0;i<n;i++){\n' +
        '\t\tdic[abs(nums[i]-i-1)]++;\t\n' +
        '\t} \n' +
        '\tfor(auto it=dic.rbegin();it!=dic.rend();++it){\n' +
        '\t\tpair<int,int> temp=*it;\n' +
        '\t\tif(temp.second>=2) cout<<temp.first<<" "<<temp.second<<endl;\n' +
        '\t}\n' +
        '\treturn 0;\n' +
        '}\n' +
        '```\n' +
        '\n' +
        '## 结果\n' +
        '\n' +
        '| 提交时间          | 状态     | 分数 | 题目                                                         | 编译器    | 耗时  | 用户  |\n' +
        '| ----------------- | -------- | ---- | ------------------------------------------------------------ | --------- | ----- | ----- |\n' +
        '| 2020/4/1 10:29:10 | 答案正确 | 20   | [1083](https://pintia.cn/problem-sets/994805260223102976/problems/994805260780945408) | C++ (g++) | 17 ms | a man |\n' +
        '\n' +
        '| 测试点 | 结果     | 耗时  | 内存   |\n' +
        '| ------ | -------- | ----- | ------ |\n' +
        '| 0      | 答案正确 | 5 ms  | 384 KB |\n' +
        '| 1      | 答案正确 | 4 ms  | 508 KB |\n' +
        '| 2      | 答案正确 | 3 ms  | 384 KB |\n' +
        '| 3      | 答案正确 | 17 ms | 808 KB |\n' +
        '\n'
    },
    {
      id: 17,
      content: '# PAT乙级：**1084** **外观数列** **(20分)**\n' +
        '\n' +
        '## 题干\n' +
        '\n' +
        '外观数列是指具有以下特点的整数序列：\n' +
        '\n' +
        '```\n' +
        'd, d1, d111, d113, d11231, d112213111, ...\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '它从不等于 1 的数字 `d` 开始，序列的第 n+1 项是对第 n 项的描述。比如第 2 项表示第 1 项有 1 个 `d`，所以就是 `d1`；第 2 项是 1 个 `d`（对应 `d1`）和 1 个 1（对应 11），所以第 3 项就是 `d111`。又比如第 4 项是 `d113`，其描述就是 1 个 `d`，2 个 1，1 个 3，所以下一项就是 `d11231`。当然这个定义对 `d` = 1 也成立。本题要求你推算任意给定数字 `d` 的外观数列的第 N 项。\n' +
        '\n' +
        '### 输入格式：\n' +
        '\n' +
        '输入第一行给出 [0,9] 范围内的一个整数 `d`、以及一个正整数 N（≤ 40），用空格分隔。\n' +
        '\n' +
        '### 输出格式：\n' +
        '\n' +
        '在一行中给出数字 `d` 的外观数列的第 N 项。\n' +
        '\n' +
        '### 输入样例：\n' +
        '\n' +
        '```in\n' +
        '1 8\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例：\n' +
        '\n' +
        '```out\n' +
        '1123123111\n' +
        '```\n' +
        '\n' +
        '## 思路\n' +
        '\n' +
        '双指针法。思路写在注释中。\n' +
        '\n' +
        '## code\n' +
        '\n' +
        '```c++\n' +
        '#include<iostream>\n' +
        '#include<vector>\n' +
        '#include<algorithm>\n' +
        'using namespace std;\n' +
        'int main(){\n' +
        '\tvector<int> vec;\n' +
        '\tint d=0,steps=0;\n' +
        '\tcin>>d>>steps;\n' +
        '\tvec.push_back(d);\n' +
        '\tfor(int i=0;i<steps-1;i++){\n' +
        '\t\tint p=0,q=0;//双指针 \n' +
        '\t\tvector<int> temp;//临时存储 \n' +
        '\t\tvec.push_back(0);//哨兵，可以节省特判步骤 \n' +
        '\t\twhile(p<vec.size()){\n' +
        '\t\t\tif(vec[p]!=vec[q]){//p和q指向的数据不相同，说明已经到临界点了 \n' +
        '\t\t\t\ttemp.push_back(vec[q]);//将数据放进数组 \n' +
        '\t\t\t\ttemp.push_back(p-q);//将个数放进数组 \n' +
        '\t\t\t\tq=p;//更新q指针的位置 \n' +
        '\t\t\t}\n' +
        '\t\t\tp++;//p指针一直往前走 \n' +
        '\t\t}\n' +
        '\t\tvec=temp;\n' +
        '\t}\n' +
        '\tfor(int values:vec) cout<<values;\n' +
        '\treturn 0;\n' +
        '} \n' +
        '```\n' +
        '\n'
    },
    {
      id: 18,
      content: '# PAT乙级：**1087** **有多少不同的值** **(20分)**\n' +
        '\n' +
        '当自然数 *n* 依次取 1、2、3、……、*N* 时，算式 ⌊*n*/2⌋+⌊*n*/3⌋+⌊*n*/5⌋ 有多少个不同的值？（注：⌊*x*⌋ 为取整函数，表示不超过 *x* 的最大自然数，即 *x* 的整数部分。）\n' +
        '\n' +
        '### 输入格式：\n' +
        '\n' +
        '输入给出一个正整数 *N*（2≤*N*≤104）。\n' +
        '\n' +
        '### 输出格式：\n' +
        '\n' +
        '在一行中输出题面中算式取到的不同值的个数。\n' +
        '\n' +
        '### 输入样例：\n' +
        '\n' +
        '```in\n' +
        '2017\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例：\n' +
        '\n' +
        '```out\n' +
        '1480\n' +
        '```\n' +
        '\n' +
        '## 思路\n' +
        '\n' +
        '从2开始，只要对2，3，5相除，存在一个是整除，说明该数字不同\n' +
        '\n' +
        '柳婼大神提供了一个set写法，也能用，可能复杂度高一点点吧。\n' +
        '\n' +
        '## code\n' +
        '\n' +
        '```c++\n' +
        '#include<iostream>\n' +
        'using namespace std;\n' +
        'int main(){\n' +
        '\tint div[3]={2,3,5};\n' +
        '\tint cnt=1,n=0;\n' +
        '\tcin>>n;\n' +
        '\tfor(int i=2;i<=n;i++){\n' +
        '\t\tfor(int j=0;j<3;j++){\n' +
        '\t\t\tif(i%div[j]==0){\n' +
        '\t\t\t\tcnt++;\n' +
        '\t\t\t\tbreak;\n' +
        '\t\t\t}\n' +
        '\t\t}\n' +
        '\t}\n' +
        '\tcout<<cnt;\n' +
        '\treturn 0;\n' +
        '} \n' +
        '```\n' +
        '\n'
    },
    {
      id: 19,
      content: '# PAT乙级：1090危险品装箱(25分)\n' +
        '\n' +
        '## 题干\n' +
        '\n' +
        '集装箱运输货物时，我们必须特别小心，不能把不相容的货物装在一只箱子里。比如氧化剂绝对不能跟易燃液体同箱，否则很容易造成爆炸。\n' +
        '\n' +
        '本题给定一张不相容物品的清单，需要你检查每一张集装箱货品清单，判断它们是否能装在同一只箱子里。\n' +
        '\n' +
        '### 输入格式：\n' +
        '\n' +
        '输入第一行给出两个正整数：*N* (≤104) 是成对的不相容物品的对数；*M* (≤100) 是集装箱货品清单的单数。\n' +
        '\n' +
        '随后数据分两大块给出。第一块有 *N* 行，每行给出一对不相容的物品。第二块有 *M* 行，每行给出一箱货物的清单，格式如下：\n' +
        '\n' +
        '```\n' +
        'K G[1] G[2] ... G[K]\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '其中 `K` (≤1000) 是物品件数，`G[i]` 是物品的编号。简单起见，每件物品用一个 5 位数的编号代表。两个数字之间用空格分隔。\n' +
        '\n' +
        '### 输出格式：\n' +
        '\n' +
        '对每箱货物清单，判断是否可以安全运输。如果没有不相容物品，则在一行中输出 `Yes`，否则输出 `No`。\n' +
        '\n' +
        '### 输入样例：\n' +
        '\n' +
        '```in\n' +
        '6 3\n' +
        '20001 20002\n' +
        '20003 20004\n' +
        '20005 20006\n' +
        '20003 20001\n' +
        '20005 20004\n' +
        '20004 20006\n' +
        '4 00001 20004 00002 20003\n' +
        '5 98823 20002 20003 20006 10010\n' +
        '3 12345 67890 23333\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例：\n' +
        '\n' +
        '```out\n' +
        'No\n' +
        'Yes\n' +
        'Yes\n' +
        '```\n' +
        '\n' +
        '## 思路\n' +
        '\n' +
        '这道题稍微复杂一点，用哈希表来做的话比较方便和简单。\n' +
        '\n' +
        '首先注意，不相容的两个物品可能重复，例如`20001`和`20002`不相容，也可以有`20001`和`20003`不相容，因此需要建立一个邻接表。\n' +
        '\n' +
        '箱子的数据输入进来的时候，用`unordered_map`记录，历遍每个物品的不相容物品并记录。再历遍一次箱子的数据，检查是否有其中一个物品被记录过，被记录过就是No，没有就是Yes。\n' +
        '\n' +
        '## code\n' +
        '\n' +
        '```c++\n' +
        '#include<iostream>\n' +
        '#include<vector>\n' +
        '#include<unordered_map>\n' +
        'using namespace std;\n' +
        'int main(){\n' +
        '\tunordered_map<int,vector<int>> notpair;\n' +
        '\tint n_nopair=0,n_box=0,temp_no1,temp_no2,temp_box_no,box_size=0;\n' +
        '\tscanf("%d%d",&n_nopair,&n_box);\n' +
        '\tfor(int i=0;i<n_nopair;i++){\n' +
        '\t\tscanf("%d%d",&temp_no1,&temp_no2);\n' +
        '\t\tnotpair[temp_no1].push_back(temp_no2);\n' +
        '\t\tnotpair[temp_no2].push_back(temp_no1);\n' +
        '\t}\n' +
        '\tunordered_map<int,bool> memo;\n' +
        '\tvector<int> box;\n' +
        '\tfor(int i=0;i<n_box;i++){\n' +
        '\t\tscanf("%d",&box_size);\n' +
        '\t\tbox.resize(box_size);\n' +
        '\t\tfor(int j=0;j<box_size;j++){\n' +
        '\t\t\tscanf("%d",&box[j]);\n' +
        '\t\t\tfor(auto it=notpair[box[j]].begin();it!=notpair[box[j]].end();it++){\n' +
        '\t\t\t\tmemo[*it]=true;\n' +
        '\t\t\t}\n' +
        '\t\t}\n' +
        '\t\tint flag=0;\n' +
        '\t\tfor(int no:box){\n' +
        '\t\t\tif(memo[no]==true){\n' +
        '\t\t\t\tflag=1;\n' +
        '\t\t\t\tbreak;\n' +
        '\t\t\t}\n' +
        '\t\t}\n' +
        '\t\tprintf("%s\\n",flag?"No":"Yes");\n' +
        '\t\tmemo.clear();\n' +
        '\t\tbox.clear();\n' +
        '\t}\n' +
        '\treturn 0;\n' +
        '} \n' +
        '```\n' +
        '\n' +
        '## 结果\n' +
        '\n' +
        '| 提交时间          | 状态     | 分数 | 题目                                                         | 编译器    | 耗时  | 用户  |\n' +
        '| ----------------- | -------- | ---- | ------------------------------------------------------------ | --------- | ----- | ----- |\n' +
        '| 2020/4/6 15:23:58 | 答案正确 | 25   | [1090](https://pintia.cn/problem-sets/994805260223102976/problems/1038429484026175488) | C++ (g++) | 66 ms | a man |\n' +
        '\n' +
        '| 测试点 | 结果     | 耗时  | 内存    |\n' +
        '| ------ | -------- | ----- | ------- |\n' +
        '| 0      | 答案正确 | 4 ms  | 444 KB  |\n' +
        '| 1      | 答案正确 | 4 ms  | 356 KB  |\n' +
        '| 2      | 答案正确 | 44 ms | 1324 KB |\n' +
        '| 3      | 答案正确 | 66 ms | 1404 KB |'
    },
    {
      id: 20,
      content: '# PAT乙级：**1094** **谷歌的招聘** **(20分)**\n' +
        '\n' +
        '## 题干\n' +
        '\n' +
        '2004 年 7 月，谷歌在硅谷的 101 号公路边竖立了一块巨大的广告牌（如下图）用于招聘。内容超级简单，就是一个以 .com 结尾的网址，而前面的网址是一个 10 位素数，这个素数是自然常数 e 中最早出现的 10 位连续数字。能找出这个素数的人，就可以通过访问谷歌的这个网站进入招聘流程的下一步。\n' +
        '\n' +
        '![prime.jpg](https://raw.githubusercontent.com/HYBB-rash/cnBlogs/master/img/20200410083322.jpg)\n' +
        '\n' +
        '自然常数 e 是一个著名的超越数，前面若干位写出来是这样的：e = 2.71828182845904523536028747135266249775724709369995957496696762772407663035354759457138217852516642**7427466391**932003059921... 其中粗体标出的 10 位数就是答案。\n' +
        '\n' +
        '本题要求你编程解决一个更通用的问题：从任一给定的长度为 L 的数字中，找出最早出现的 K 位连续数字所组成的素数。\n' +
        '\n' +
        '### 输入格式：\n' +
        '\n' +
        '输入在第一行给出 2 个正整数，分别是 L（不超过 1000 的正整数，为数字长度）和 K（小于 10 的正整数）。接下来一行给出一个长度为 L 的正整数 N。\n' +
        '\n' +
        '### 输出格式：\n' +
        '\n' +
        '在一行中输出 N 中最早出现的 K 位连续数字所组成的素数。如果这样的素数不存在，则输出 `404`。注意，原始数字中的前导零也计算在位数之内。例如在 200236 中找 4 位素数，0023 算是解；但第一位 2 不能被当成 0002 输出，因为在原始数字中不存在这个 2 的前导零。\n' +
        '\n' +
        '### 输入样例 1：\n' +
        '\n' +
        '```in\n' +
        '20 5\n' +
        '23654987725541023819\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例 1：\n' +
        '\n' +
        '```out\n' +
        '49877\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输入样例 2：\n' +
        '\n' +
        '```in\n' +
        '10 3\n' +
        '2468024680\n' +
        '\n' +
        '      \n' +
        '    \n' +
        '```\n' +
        '\n' +
        '### 输出样例 2：\n' +
        '\n' +
        '```out\n' +
        '404\n' +
        '```\n' +
        '\n' +
        '## 思路\n' +
        '\n' +
        '从头历遍到位，构建字串，转成int类型，再判断是否是素数。\n' +
        '\n' +
        '记得输出字符串，不是输出整数。0是要保留输出的。\n' +
        '\n' +
        '## code\n' +
        '\n' +
        '```c++\n' +
        '#include<iostream>\n' +
        '#include<string>\n' +
        'using namespace std;\n' +
        'bool prime(int num){\n' +
        '\tif(num==1||num==0) return false;\n' +
        '\tfor(int i=2;i*i<=num;i++){\n' +
        '\t\tif(num%i==0) return false;\n' +
        '\t}\n' +
        '\treturn true;\n' +
        '}\n' +
        'int main(){\n' +
        '\tstring num;\n' +
        '\tint len=0,k=0;\n' +
        '\tcin>>len>>k>>num;\n' +
        '\tauto it1=num.begin(),it2=num.begin()+k;\n' +
        '\twhile(it2<=num.end()){\n' +
        '\t\tstring temp(it1,it2);\n' +
        '\t\tint num=stoll(temp);\n' +
        '\t\tif(prime(num)){\n' +
        '\t\t\tcout<<temp;\n' +
        '\t\t\treturn 0;\n' +
        '\t\t}\n' +
        '\t\tit1++,it2++;\n' +
        '\t}\n' +
        '\tcout<<"404"<<endl;\n' +
        '\treturn 0;\n' +
        '}\n' +
        '```\n' +
        '\n' +
        '## 结果\n' +
        '\n' +
        '| 提交时间           | 状态     | 分数 | 题目                                                         | 编译器    | 耗时 | 用户  |\n' +
        '| ------------------ | -------- | ---- | ------------------------------------------------------------ | --------- | ---- | ----- |\n' +
        '| 2020/4/10 08:34:32 | 答案正确 | 20   | [1094](https://pintia.cn/problem-sets/994805260223102976/problems/1071785997033074688) | C++ (g++) | 4 ms | a man |\n' +
        '\n' +
        '| 测试点 | 结果     | 耗时 | 内存   |\n' +
        '| ------ | -------- | ---- | ------ |\n' +
        '| 0      | 答案正确 | 4 ms | 512 KB |\n' +
        '| 1      | 答案正确 | 4 ms | 384 KB |\n' +
        '| 2      | 答案正确 | 4 ms | 384 KB |\n' +
        '| 3      | 答案正确 | 4 ms | 384 KB |\n' +
        '| 4      | 答案正确 | 3 ms | 384 KB |\n' +
        '| 5      | 答案正确 | 4 ms | 384 KB |\n' +
        '| 6      | 答案正确 | 4 ms | 384 KB |\n' +
        '\n'
    }
  ]
  for (const item of content) {
    if (item.id === Number(data.aid)) return item
  }
}

// 返回文章列表
export const getPaperList = (data) => {
  console.log(data)
  const PaperList = [
    {
      uid: 1,
      paperList: [
        {
          id: 1,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 2,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 3,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 4,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 5,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 6,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        }
      ]
    },
    {
      uid: 2,
      paperList: [
        {
          id: 1,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 2,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 3,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 4,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 5,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 6,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        }
      ]
    },
    {
      uid: 3,
      paperList: [
        {
          id: 1,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 2,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 3,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 4,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 5,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 6,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        }
      ]
    },
    {
      uid: 4,
      paperList: [
        {
          id: 1,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 2,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 3,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 4,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 5,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 6,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        }
      ]
    },
    {
      uid: 5,
      paperList: [
        {
          id: 1,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 2,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 3,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 4,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 5,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 6,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        }
      ]
    },
    {
      uid: 6,
      paperList: [
        {
          id: 1,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 2,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 3,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 4,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 5,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        },
        {
          id: 6,
          name: 'hyong',
          watch: 666,
          love: 666,
          comment: 666,
          status: 1
        }
      ]
    }
  ]
  for (const item of PaperList) {
    if (item.uid === Number(data.id)) return item.paperList
  }
}
