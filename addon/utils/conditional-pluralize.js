export default function conditionalPluralize(string,conditionValue) {

  if(conditionValue === 0 || conditionValue > 1)
  {
    return string.pluralize();
  }
  else
  {
    return string;
  }
}
