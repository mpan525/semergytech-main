import { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import logo from '@/public/assets/images/logo.png';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();
  return (
    <div className="px-1 w-full antialiased text-gray-700">
      {props.meta}

      <div className="mx-auto max-w-screen-lg">
        <div className="border-b border-gray-300">
          <div className="pt-16 pb-8">
            <div className="w-96">
              <Image src={logo} alt="Semergytech logo" />
            </div>
          </div>
          <div>
            <ul className="flex flex-wrap text-xl">
              <li className="mr-6">
                <Link href="/">
                  <a
                    className={`text-gray-700 hover:text-gray-900 border-none ${
                      router.pathname === '/' ? 'font-bold' : ''
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/technology/">
                  <a
                    className={`text-gray-700 hover:text-gray-900 border-none ${
                      router.pathname === '/technology' ? 'font-bold' : ''
                    }`}
                  >
                    Technology
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/products/">
                  <a
                    className={`text-gray-700 hover:text-gray-900 border-none ${
                      router.pathname === '/products' ? 'font-bold' : ''
                    }`}
                  >
                    Products
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/jobs/">
                  <a
                    className={`text-gray-700 hover:text-gray-900 border-none ${
                      router.pathname === '/jobs' ? 'font-bold' : ''
                    }`}
                  >
                    Jobs
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/contact/">
                  <a
                    className={`text-gray-700 hover:text-gray-900 border-none ${
                      router.pathname === '/contact' ? 'font-bold' : ''
                    }`}
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-5 text-xl content">{props.children}</div>

        <div className="py-8 text-sm text-center border-t border-gray-300">
          © Copyright {new Date().getFullYear()} {AppConfig.title}.
        </div>
      </div>
    </div>
  );
};

export { Main };
