import { Spinner } from 'flowbite-react';
import LoadingSpin from "react-loading-spin";

export default function Loading() {
    return (
        <div className="relative mx-auto max-w-2xl py-80">
            <div className="text-center">
                <LoadingSpin />
            </div>
        </div>
    )
}