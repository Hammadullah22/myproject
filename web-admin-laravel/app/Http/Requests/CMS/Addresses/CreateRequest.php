<?php

namespace App\Http\Requests\CMS\Addresses;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
    public function attributes(){

      $allAttributes = [];
      $allAttributes['address'] = trans('messages.fields.address');
      $allAttributes['country_id'] = trans('messages.fields.country_id');
      $allAttributes['customer_id'] = trans('messages.fields.customer_id');
      $allAttributes['state_id'] = trans('messages.fields.state_id');
      $allAttributes['city_id'] = trans('messages.fields.city_id');
      $allAttributes['zip_code'] = trans('messages.fields.zip_code');
    //  $allAttributes['is_active'] = trans('messages.fields.is_active');
      // Single Lang Attribute Names

      return $allAttributes;

    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
          'address' => 'string|max:255',
          'country_id' => 'required|exists:countries,id',
          'customer_id' => 'required|exists:customers,id',
          'state_id' => 'required|exists:states,id',
          'city_id' => 'required|exists:cities,id',
          'zip_code' => 'required|numeric',
        //  'is_active' => 'required|bool',
        ];
    }
}
