import { forwardRef } from "react";

export default forwardRef<HTMLInputElement>(function(_, ref){
    return (
        <>
            <label  className="block text-gray-700 text-sm font-bold mb-2 max-w-80">
                Your contry here
                <input ref={ref} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Argentina"></input>
            </label>
        </>
    );
})