
const recommendedFields = [
    'Programs',
    'Data Science',
    'Technology',
    'Mobile Apps',
    'Relationships',
    ' Self Improvement',
    'Agriculture',
    'Virtual Reality',
    'Programs',
    'Data Science',
    
    
   
    // Add more fields as needed
  ];
  const recommendedTags = [
    'Programs',
    'Data Science',
    'Technology',
    'Mobile Apps',
    'Relationships',
    ' Self Improvement',

    
   
    // Add more fields as needed
  ];
const Discovery = () => {
  return (


    <div className="flex-grow p-8 absolute right-20 mt-[120px] ">
    
      <div className="items-center text-center">
        <h2 className="text-lg font-bold mb-2">Recommended Fields</h2>
        <div className="p-4 grid grid-cols-2 gap-2">
          {recommendedFields.map((field, index) => (
            <div
              key={index}
              className="p-2 bg-gray-800 bg-opacity-30 rounded-md hover:bg-opacity-40 cursor-pointer"
            >
              <p className="text-sm">{field}</p>
              
            </div>
          ))}
          <div className="flex mt-1">
            <a
              href="#"
              className="text-primary text-sm font-bold  px-3 py-2"
            >
             See More Topics
            </a>
          
          </div>
          
        </div>
        <hr className="mt-4 ml-4 border-t border-gray-300 w-[350px]" />
        <div className="p-4 grid grid-cols-3 gap-2">
          {recommendedTags.map((field, index) => (
            <div
              key={index}
              className="p-1 text-gray-500 hover:bg-opacity-40 cursor-pointer"
            >
              <p className="text-sm">{field}</p>
              
            </div>
          ))}
        
        </div>
      </div>
      
    </div>
  );
};

export default Discovery;
