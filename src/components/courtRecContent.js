import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { Button } from 'flowbite-react';
import { Transition } from '@headlessui/react';
import { Dialog } from '@headlessui/react';

export default function CourtRecContent() {
    
    const navigate = useNavigate();
    const [warningOpen, setWarningOpen] = useState(false);
  
    function handleClick() {
      setWarningOpen(true);
      navigate('/formpage');
    }
    return (
        <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-45 overflow-y-hidden">
            <div className="text-center">
                <div>
                  <div class="px-4 sm:px-0">
                    <h3 class="text-base font-semibold leading-7 text-gray-900">Thank you for the information!</h3>
                    <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Here are the details about the court</p>
                  </div>
                  <div class="mt-6 border-t border-gray-100">
                    <dl class="divide-y divide-gray-100">
                      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Court name</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Amtsgericht München</dd>
                      </div>
                      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Address</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Pacellistraße 5, 80333 Munich, Germany</dd>
                      </div>
                      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">poststelle@ag-m.bayern.de</dd>
                      </div>
                      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Phone:</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">+49 (0)89 5597-0</dd>
                      </div>
                    </dl>
                  </div>
                </div>
            </div>
        </div>
    )}