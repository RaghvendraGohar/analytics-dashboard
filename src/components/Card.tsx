interface CardProps {
    title: string;
    value: string | number;  // Allowing both strings and numbers as value types
  }
  
  const Card = ({ title, value }: CardProps) => (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-80">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
  
  export default Card;
  