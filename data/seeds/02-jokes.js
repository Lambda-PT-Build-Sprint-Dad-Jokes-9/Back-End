exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('joke').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('joke').insert([
         {
          id:1,
          question:'Did you hear about the guy whose whole left side was cut off? ',
          answer:'He is all right now.',
          public:true,
          joke_owner:'DadBOT101',
         
         },
         {
          id:2,
          question:'Why didn’t the skeleton cross the road?',
          answer:'Because he had no guts.',
          public:true,
          joke_owner:'DadBOT203',
         
         },
         {
          id:3,
          question:'What do you call someone with no body and no nose? ',
          answer:'Nobody knows.',
          public:true,
          joke_owner:'DadBOT204',
          
         },
         {
          id:4,
          question:'What did one nut say as he chased another nut? ',
          answer:'I\'m a cashew!',
          public:true,
          joke_owner: 'DadBOT101',
         
         },
         {
          id:5,
          question:'MOM: "How do I look?"',
          answer:'DAD: "With your eyes."',
          public:true,
          joke_owner:'DadBOT203',
         
         },
         {
          id:6,
          question:'How come the stadium got hot after the game? ',
          answer:'Because all of the fans left.',
          public:true,
          joke_owner: 'DadBOT101',
         
         },
         {
          id:7,
          question:'What does a zombie vegetarian eat? ',
          answer:'GRRRAAAAAIIIINNNNS!',
          public:true,
          joke_owner: 'DadBOT101',
         
         },
         {
          id:8,
          question:'What has two butts and kills people?',
          answer:'An assassin',
          public:false,
          joke_owner:'DadBOT204',
         
         },
         {
          id:9,
          question:'What did the pirate say on his 80th birthday? ',
          answer:'AYE MATEY',
          public:false,
          joke_owner: 'DadBOT101',
        
         },
         {
          id:10,
          question:'What time did the man go to the dentist?',
          answer:'Tooth hurt-y.',
          public:false,
          joke_owner:'DadBOT204',
         
         },
         {
          id:11,
          question:'What’s Forrest Gump’s password?',
          answer:'1forrest1',
          public:false,
          joke_owner: 'DadBOT101',
        
         },
         {
          id:12,
          question:'Can February March?',
          answer:'No, but April May!',
          public:false,
          joke_owner:'DadBOT203',
         
         },
        ]);
      });
  };