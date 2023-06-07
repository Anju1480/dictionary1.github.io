var dictionary = [
  { word: "Caffeine", english: "Caffeine is a natural stimulant found in coffee, tea, chocolate, and other plants. It boosts alertness, helps with focus, and temporarily fights tiredness..", hindi: "कॉफी और चाय में पाया जाने वाला एक रसायन जो एक उत्तेजक है (कुछ ऐसा जो आपको अधिक सक्रिय बनाता है)।", telugu: "కాఫీన్ - చాయ, కాఫీ మొదలైనవిలో ఉన్న ఒక మధ్యమ పదార్థం, జాగరూకతను మరియు శక్తిని పెంచేందుకు సహాయం చేస్తుంది।", tamil: "காபி - டீ, காபி முதல் போன்ற உணவு பொருட்களில் உள்ள ஒரு மொத்தமிட பொருட்டு, மூச்சுத் திறனையும் சக்தியையும் அதிகரிக்கும் உதவுகின்றது.", malayalam: "കാഫിൻ - ചായ, കോഫി എന്നിവയിൽ കാണപ്പെടുന്ന ഒരു മധ്യരൂപത്തിലുള്ള പദാര്‍ത്ഥമാണ്, ജാഗ്രതാവും ശക്തിയും കൂട്ടുന്നതിനു സഹായിക്കുന്നു." },
  { word: "Alcohol", english: "Drink (such as whiskey or beer) containing ethanol.", hindi: "इथेनॉल युक्त पेय (जैसे व्हिस्की या बीयर)।", telugu: "కాఫీన్ - చాయ, కాఫీ మొదలైనవిలో ఉన్న ఒక మధ్యమ పదార్థం, జాగరూకతను మరియు శక్తిని పెంచేందుకు సహాయం చేస్తుంది।", tamil: "ஆல்கஹால் - ஒரு மது பொருட்டு, உயர்ந்த ஆத்ம துணைத்திருத்தம், மென்மைக்குள் உள்ள ஜீவன் சாந்தியத்தை உண்டாக்குகின்றது.", malayalam: "മദ്യം - ഒരു മദ്യപദാര്‍ത്ഥം, ആത്മാഭിമാനം, ജീവിതശാന്തി, മറ്റും സത്യത്തിനും വിരുദ്ധമായതാണ്." },
  { word: "Nicotine", english: "A poisonous alkaloid C10H14N2 that is the chief active principle of tobacco and is used as an insecticide.", hindi: "एक जहरीला अल्कलॉइड C10H14N2 जो तंबाकू का मुख्य सक्रिय सिद्धांत है और इसका उपयोग कीटनाशक के रूप में किया जाता है।", telugu: "నికోటీన్ - సిగరెట్లు, వాప్ పెన్నులు మరియు ఇతర ధూమపాన పదార్థాలు లభించే ఒక విషయప్రముఖ పదార్థం, ఆశారామం మరియు ఆత్మ అనుకూలతని పెంచేలా ప్రభావం పెరుగుతుంది.", tamil: "நிகோடின் - சிகரெட், வேப்பை வசதிக்கும் மற்றும் மன நுணுக்கத்தை அதிகரிக்கும் ஒரு முக்கியப் பொருள், ஆரோக்கியத்திற்கு எதிரான பிரச்சனைகளை உண்டாக்குகின்றது.", malayalam: "നിക്കോട്ടൈൻ - സിഗരെറ്റുകൾ, വേപ്പപ്പൂർണ്ണങ്ങൾ എന്നിവ ഉപയോഗിക്കുന്ന ഒരു പ്രധാന ഘടകം, ആരോഗ്യത്തിനും മനസ്സിനും പ്രയോജനപ്പെടുത്തുന്നു." },
  { word: "Tobacco", english: "Tobacco is dried leaves which people smoke in pipes, cigars, and cigarettes. You can also refer to pipes, cigars, and cigarettes as a whole as tobacco..", hindi: "तंबाकू सूखे पत्ते हैं जो लोग पाइप, सिगार और सिगरेट में धूम्रपान करते हैं। आप पाइप, सिगार और सिगरेट को समग्र रूप से तंबाकू के रूप में भी संदर्भित कर सकते हैं।", telugu: "తమాకు - ధూమపాన పదార్థం మరియు తమాకు ఉత్పాదనలో ఉపయోగించే మొక్కల పై ఆధారితమైన పదార్థం, ఆరోగ్యాన్ని హానిపరిచే ప్రభావం కలుగుతుంది.", tamil: "பட்டாக்கோ - தும்மல் பொருள், தும்மல் உற்பத்தியில் பயன்படுத்தப்படும் ஒரு மூலப்பொருட்டு, ஆரோக்கியத்தை தாமரிக்கும் விளைவை ஏற்படுத்துகின்றது.", malayalam: "തൊപ്പാക്കോ - സ്മോകിങ് പദാര്‍ത്ഥം, തൊപ്പാക്കോ ഉത്പാദനത്തില്‍ ഉപയോഗിക്കുന്ന ഒരു സസ്യം അടയാളപ്പെടുന്നു, ആരോഗ്യത്തിനു ഹാനികരം ആകുന്നു." },
  { word: "Cannabis", english: "Any of several mildly euphoriant, intoxicating hallucinogenic drugs, such as ganja, hashish, or marijuana, prepared from various parts of this plant..", hindi: "कैनाबिस - एक वनस्पति जिसमें एक प्रमुख प्रमाण में पाया जाने वाला उपयोग नशीली दवा के रूप में होता है, जिसका उपयोग मनोरंजन, आराम, और चिकित्सा के लिए किया जाता है।", telugu: "కనబిస్ - అదే సామాన్యంగా నశించే ఆక్రోట్త వనస్పతి, మనోరంజన, ఆరామాన్ని పొందడానికి మరియు వైద్యంగా ఉపయోగించడానికి ఉపయోగపడే మద్యం.", tamil: "கனபிஸ் - ஒரு மதுபான வாய்ப்புகளை உருவாக்க, சூழ்நிலை உயிரினங்களை தினமும் மூடிவிட மருத்துவத்திற்குப் பயன்படுத்தப்படும் ஒரு தாவரம்.", malayalam: "കണ്ണാബിസ് - ഒരു മത്സ്യവനസ്പതി ആണ്, പ്രമേയം, വിനോദവും, ആയുര്‍വേദ ചികിത്സയിലേക്ക് ഉപയോഗിക്കുന്നു." },
  { word: "Hallucinogens", english: "a drug that causes people to hallucinate (see or hear things that do not exist).", hindi: "एक दवा जो लोगों को मतिभ्रम का कारण बनती है (उन चीजों को देखें या सुनें जो मौजूद नहीं हैं)।", telugu: "హాల్యూసినజన్ - మాయాజాలం సృష్టించే పదార్థం, పరిమితి మరియు ఆత్మానికి ప్రభావితమైన చిత్రలహరిలో ముగియేలా అనుభవించడంలో ఉపయోగపడుతుంది.", tamil: "மாயாஜாலம் - உணர்ச்சிப்பெருக்க மருந்து, எதிர்பார்க்கப்படும் உள்ளங்களை மாயப்படுத்தும் அனுபவங்களில் பங்களிக்கும் பயன்படுத்தப்படுகின்றது.", malayalam: "മായാജാലം - ഒരു ഉറവിടം സൃഷ്ടിക്കുന്ന മരുന്ന്, ആത്മാവിനെ പ്രഭാവിതമാക്കുന്ന മനസ്സിന്റെ വെളിച്ചം അനുഭവപ്പെടുന്നു." },
  { word: "Sedatives", english: "A drug used to calm a person or animal or to make them sleep.", hindi: "एक दवा जिसका उपयोग किसी व्यक्ति या जानवर को शांत करने या उन्हें सुलाने के लिए किया जाता है।", telugu: "సెడాటివ్స్ - శాంతిపూర్వకంగా పనిమని పెట్టుకునే పదార్థాలు, అంతరాళంలో మానసిక శాంతిని సృష్టించేలా ప్రభావం చూపిస్తాయి.", tamil: "சமாளிப்பு மருந்துகள் - மன அமைதியை உருவாக்கும் பதார்த்தங்கள், உள்ளம் முன்னேற்றத்தை அமைக்கும் விளைவாக இயற்க்கப்படுகின்றன.", malayalam: "സെഡാറ്റീവുകൾ - മനസ്സെടുക്കുന്ന പദാർത്ഥങ്ങൾ, മനസ്സിനെ ശാന്തമാക്കുന്നതിനും മനസ്സുറപ്പിക്കുന്നതിനും ഉപയോഗപ്പെടുന്നു." },
  { word: "Dependency", english: "A situation in which you need something or someone and are unable to continue normally without them.", hindi: "एक स्थिति जिसमें आपको किसी चीज़ या किसी की आवश्यकता होती है और उनके बिना सामान्य रूप से जारी रखने में असमर्थ होते हैं।", telugu: "ఆధారాభిముఖీకరణం - ఒక వ్యక్తి ఒక వస్తు, వ్యాయామం లేదా పదార్థం చేతన అవలంబించటం, అది కావాలనుకుంటే పోటీకరణం అవసరం.", tamil: "ஆபத்திருப்தி - ஒருவர் ஒரு பொருள், பயிற்சி அல்லது உருப்படி என்றால் அதில் அதிர்ச்சி அடைவது தேவையானது.", malayalam: "ആശ്രയം - ഒരുവൻ ഒരു വസ്ത്രം, പ്രായോഗികമായി അല്ലെങ്കിൽ പദാർത്ഥം ആവശ്യപ്പെടുന്നതിന് അതിരാവശ്യമാണ്." },
  { word: "Reliance", english: "The state of depending on or trusting in something or someone.", hindi: "किसी वस्तु या व्यक्ति पर निर्भर होने या उस पर भरोसा करने की स्थिति।", telugu: "అధారపడిక - ఒక వ్యక్తి మరియు ఒక సంఘం విశ్వాసం, నమ్మకం, మరియు ఆధారం పట్టుకోవడానికి అవసరమవుతుంది.", tamil: "நம்பிக்கை - ஒரு நபர் மற்றும் குழுவின் நம்பிக்கை, நம்பிக்கையை ஆதரிக்க, ஆதரவாக நிறைவேற்ற தேவைப்படுகின்றது.", malayalam: "നിര്ഭരയുള്ളത് - ഒരു വ്യക്തിയും ഒരു ഗ്രാമീണം വിശ്വസിക്കുന്നതും, വിശ്വാസവും, ആധാരവും വരെ അവസാനിക്കുന്നതുമാണ്." },
  { word: "Compelled", english: "Having to do something, because you are forced to or feel it is necessary.", hindi: "मजबूर - अनिवार्यता या प्रेरित किये जाने के कारण किया जाने वाला कार्य या निर्णय।", telugu: "బలపరిపాలన - అనివార్యత లేదా ప్రేరేపణ కారణంగా చేసిన చర్య లేదా నిర్ణయం.", tamil: "அதிர்ச்சி செய்யப்படும் - கட்டாயமான அல்லது இயல்புடைய காரணத்தால் செய்யப்படும் செயல் அல்லது முறை.", malayalam: "ബാധിക്കുന്നു - അനിവാര്യമായി അല്ലെങ്കിൽ അവസാനിപ്പിക്കേണ്ടതുമായ ഒരു നടപടി അല്ലെങ്കിൽ നിരൂപണം." },
  { word: "Indulge", english: "To allow yourself or another person to have something enjoyable, especially more than is good for you.", hindi: "लिप्त होना - आनन्द या आस्वाद करना या किसी ऐसे कार्य में प्रवृत्त होना, जो आमतौर पर नियमित या स्वाभाविक नहीं होता।", telugu: "ఆనందించు - సాధారణంగా నియమిత లేదా స్వాభావికంగా లేని ఒక చర్యలో మగిగిపోవటం లేదా ఆనందించటం.", tamil: "சுவாரஸ்யப்படுத்து - பொதுவாக செயல்படும் அல்லது இயற்றப்படும் ஒரு நிகழ்வில் ஆர்வத்தைப் பெறுவது.", malayalam: "ആസ്വദിക്കുക - സാധാരണയായി നിയമപ്രകാരം അല്ലെങ്കിൽ സ്വാഭാവികംഗാ നടപ്പാക്കപ്പെടുന്നതുമല്ലാതെ ഒരു കാര്യത്തിൽ ആനന്ദിക്കുവാനാകുന്നത്." },
];

function createDictionary() {
  var dictionaryTable = document.getElementById("dictionaryTable");
  var tbody = dictionaryTable.getElementsByTagName("tbody")[0];

  for (var i = 0; i < dictionary.length; i++) {
    var word = dictionary[i].word;
    var meanings = dictionary[i];

    var row = createRow(word, meanings);
    tbody.appendChild(row);
  }
}

function createRow(word, meanings) {
  var row = document.createElement("tr");
  row.onclick = (function (meanings) {
    return function () {
      showMeanings(meanings);
    }
  })(meanings);

  var wordCell = document.createElement("td");
  wordCell.textContent = word;
  row.appendChild(wordCell);

  var englishCell = createMeaningCell(meanings.english);
  row.appendChild(englishCell);

  var hindiCell = createMeaningCell(meanings.hindi);
  row.appendChild(hindiCell);

  var teluguCell = createMeaningCell(meanings.telugu);
  row.appendChild(teluguCell);

  var tamilCell = createMeaningCell(meanings.tamil);
  row.appendChild(tamilCell);

  var malayalamCell = createMeaningCell(meanings.malayalam);
  row.appendChild(malayalamCell);

  return row;
}

function createMeaningCell(meaning) {
  var cell = document.createElement("td");
  cell.className = "language-cell";

  var meaningDiv = document.createElement("div");
  meaningDiv.className = "meaning-container";

  var meaningItem = document.createElement("div");
  meaningItem.className = "meaning-item";

  var meaningLanguage = document.createElement("p");
  meaningLanguage.className = "meaning-language";

  var meaningText = document.createElement("p");
  meaningText.className = "meaning-text";
  meaningText.textContent = meaning;

  meaningItem.appendChild(meaningLanguage);
  meaningItem.appendChild(meaningText);
  meaningDiv.appendChild(meaningItem);
  cell.appendChild(meaningDiv);

  return cell;
}

function showMeanings(meanings) {
  console.log(meanings);
  // Perform actions to display meanings in another section of the page
}

function addWord() {
  var wordInput = document.getElementById("wordInput");
  var englishInput = document.getElementById("englishInput");
  var hindiInput = document.getElementById("hindiInput");
  var teluguInput = document.getElementById("teluguInput");
  var tamilInput = document.getElementById("tamilInput");
  var malayalamInput = document.getElementById("malayalamInput");

  var word = wordInput.value;
  var meanings = {
    word: word,
    english: englishInput.value,
    hindi: hindiInput.value,
    telugu: teluguInput.value,
    tamil: tamilInput.value,
    malayalam: malayalamInput.value
  };

  dictionary.push(meanings);

  var tbody = document.getElementById("dictionaryBody");
  var newRow = createRow(word, meanings);
  tbody.appendChild(newRow);

  // Clear the form inputs
  wordInput.value = "";
  englishInput.value = "";
  hindiInput.value = "";
  teluguInput.value = "";
  tamilInput.value = "";
  malayalamInput.value = "";
}

createDictionary();