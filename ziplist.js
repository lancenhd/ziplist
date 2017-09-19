/**
 *VCreated by Lancen Daclison 9/18/17
 * Implements the ziplist option for E27
 */

const testlist1 = ['a', 'b', 'c'];
const testiist2 = [1, 2, 3];

function ziplist (list1, list2)
{
  const resultlist = [];
  for(let i = 0; i <list.length; i++)
  {
    resultlist.push(list1[i], list2[i]);
  }
   return returnlist;
}

 console.log(ziplist(testlist1, testlist2));


function ziplistThesimpleway(list1, list2)
{
  return _.flatten(_.zip(list1, list2));
}

console.log(ziplistThesimpleway(testlist1, testlist2));