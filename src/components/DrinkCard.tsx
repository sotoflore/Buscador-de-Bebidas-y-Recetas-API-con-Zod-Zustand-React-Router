import { useAppStore } from "../stores/useAppStore"
import { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export const DrinkCard = ({ drink }: DrinkCardProps) => {
    
    const selectRecipe = useAppStore((state) => state.selectRecipe);

    return (
        <div className="border shadow-lg">
            <div className="overflow-hidden">
                <img
                    src={drink.strDrinkThumb}
                    alt={`imagen de ${drink.strDrink}`}
                    className="hover:scale-125 transition-transform hover:rotate-2"
                />
            </div>
            <div className="p-5">
                <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
                <button
                    onClick={() => selectRecipe(drink.idDrink)}
                    type="button"
                    className="bg-orange-500 hover:bg-orange-600 mt-5 w-full p-3 font-bold"
                >
                    Ver Receta
                </button>
            </div>
        </div>
    )
}
